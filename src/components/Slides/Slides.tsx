import { FC, useState } from "react";
import { Slide } from "../../api/slides/getSlides.type";
import BottomBar from "./BottomBar";
import { AnswerRadio } from "./Answer/Answer";

type SlidesProps = {
  slides: Slide['slides']
}

export const Slides: FC<SlidesProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [chosenAnswerId, setChosenAnswerId] = useState<null|string>(null);

  const onContinuePress = () => {
    setChosenAnswerId(null);
    
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const onGoBackPress = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const updateAnswered = (answerId: string) => {
    setChosenAnswerId(answerId)
  }

  return (
    <div className="flex flex-col flex-1 justify-between">
      <div className="flex flex-col items-start justify-center h-max max-w-full sm:w-[599px] mx-5 sm:min-mx-20 sm:mx-auto bg-white mt-60">
        {/* Badge */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-2 py-1 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-gray-700">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>

        {/* Question */}
        <h2 className="text-lg font-semibold text-gray-800 mb-6">
          {slides[currentSlide].question}
        </h2>

        {/* Answers */}
        <div className="space-y-3 w-full">
          {slides[currentSlide].answers.map((answer) => (
            <AnswerRadio
              onChecked={updateAnswered}
              hasAnswerBeenChosen={chosenAnswerId !== null}
              isAnswerChecked={chosenAnswerId === answer.id}
              currentSlide={currentSlide}
              answer={answer} />
          ))}
        </div>
      </div>

      <BottomBar onGoBackPress={onGoBackPress} onContinuePress={onContinuePress} isContinueDisabled={chosenAnswerId === null} />
    </div>
  );
};
