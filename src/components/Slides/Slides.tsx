import { FC, useState } from "react";
import { QuestionSlide, Course } from "../../api/slides/getSlides.type";
import BottomBar from "./BottomBar";
import { AnswerRadio } from "./Answer/Answer";
import { useNavigate } from "@tanstack/react-router";
import { useCourseStore } from "../../store/course.store";

type SlidesProps = {
  slides: Course['slides']
}

type HasAnswerCorrectlyArgs = {
  currentSlideQuestion: QuestionSlide;
  chosenAnswerId: string;
}

const hasAnsweredCorrectly = ({currentSlideQuestion, chosenAnswerId}: HasAnswerCorrectlyArgs) => {
  const chosenAnswer = currentSlideQuestion.answers.find(q => q.id === chosenAnswerId);
  return chosenAnswer?.correct;
}

export const Slides: FC<SlidesProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [chosenAnswerId, setChosenAnswerId] = useState<null|string>(null);
  const navigate = useNavigate();
  const {incrementScore} = useCourseStore()

  const onContinuePress = () => {
    setChosenAnswerId(null);
    
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (currentSlide == slides.length - 1) {
      navigate({ to: '/score' });
    }
  };

  const onGoBackPress = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleAnswerChecked = (chosenAnswerId: string) => {
    if (hasAnsweredCorrectly({currentSlideQuestion: slides[currentSlide], chosenAnswerId})) {
      incrementScore()
    }

    setChosenAnswerId(chosenAnswerId)
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
          {slides[currentSlide]?.question}
        </h2>

        {/* Answers */}
        <div className="space-y-3 w-full">
          {slides[currentSlide].answers.map((answer) => (
            <AnswerRadio
              key={answer.id}
              onChecked={handleAnswerChecked}
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
