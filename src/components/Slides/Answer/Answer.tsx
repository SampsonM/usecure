import { FC } from "react";
import type { Answer } from "../../../api/slides/getSlides.type";
import { ANSWER_STATES, ANSWER_STATES_KEYS, AnswerState, getAnswerState, getAnswerTextStyles } from "./AnswerState";
import classNames from "classnames";

type AnswerProps = {
  answer: Answer;
  currentSlide: number;
  isAnswerChecked: boolean;
  hasAnswerBeenChosen: boolean;
  onChecked: (answerId: string) => void;
}

const getAnswerInputStyles = (answerState: ANSWER_STATES_KEYS) => {
  return classNames(
    {'bg-gray-200': ANSWER_STATES.NOTHING_CHOSEN === answerState},
    {'bg-green-200': ANSWER_STATES.CORRECT === answerState},
    {'bg-yellow-200': ANSWER_STATES.CORRECT_NOT_CHOSEN === answerState},
    {'bg-red-200': ANSWER_STATES.INCORRECT === answerState},
    `font-semibold py-2 px-4  border rounded shadow flex items-center space-x-2 cursor-pointer`
  )
}

export const AnswerRadio: FC<AnswerProps> = ({ onChecked, hasAnswerBeenChosen, isAnswerChecked, answer, currentSlide }) => {
  const answerState = getAnswerState({isAnswerChecked, isAnswerCorrect: answer.correct, hasAnswerBeenChosen});
  const answerInputStyles = getAnswerInputStyles(answerState);
  const answerTextStyles = getAnswerTextStyles(answerState);

  return (
    <>
      <label className={answerInputStyles}>
        <input
          type="radio"
          name={`question-${currentSlide}`}
          value={answer.id}
          checked={isAnswerChecked}
          disabled={hasAnswerBeenChosen}
          onChange={(e) => onChecked(e.currentTarget.value)}
          className="min-h-5 min-w-5 border-2 rounded-full focus:ring-0"
        />
        <span className={answerTextStyles}>{answer.text}</span>
      </label>
      <AnswerState hasAnswerBeenChosen={hasAnswerBeenChosen} isAnswerChecked={isAnswerChecked} isAnswerCorrect={answer.correct} />
    </>
  )
}
