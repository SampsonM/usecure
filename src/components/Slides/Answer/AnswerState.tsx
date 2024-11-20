import { FC } from "react";
import { NullWrapper } from "../../NullWrapper/NullWrapper";
import classNames from "classnames";

type AnswerStateProps = {
  isAnswerCorrect: boolean;
  isAnswerChecked: boolean;
  hasAnswerBeenChosen: boolean;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ANSWER_STATES = {
  CORRECT: 'CORRECT',
  INCORRECT: 'INCORRECT',
  CORRECT_NOT_CHOSEN: 'CORRECT_NOT_CHOSEN',
  NOTHING_CHOSEN: 'NOTHING_CHOSEN'
} as const;

// TODO: Move to constants file, re-assess if this is worth it? its extendable, but will we ever have more options?
// eslint-disable-next-line react-refresh/only-export-components
export const ANSWER_STATE_TEXT = {
  [ANSWER_STATES.CORRECT]: 'Correct!',
  [ANSWER_STATES.INCORRECT]: 'Incorrect...',
  [ANSWER_STATES.NOTHING_CHOSEN]: '',
  [ANSWER_STATES.CORRECT_NOT_CHOSEN]: 'This was the answer, tsk.',
}

export type ANSWER_STATES_KEYS = keyof typeof ANSWER_STATES

type getAnswerStateArgs = {
  isAnswerCorrect: boolean;
  isAnswerChecked: boolean;
  hasAnswerBeenChosen: boolean;
}

// TODO:  could this be a util instead?
// eslint-disable-next-line react-refresh/only-export-components
export const getAnswerState = ({isAnswerCorrect, isAnswerChecked, hasAnswerBeenChosen}: getAnswerStateArgs): ANSWER_STATES_KEYS => {
  if (isAnswerCorrect && isAnswerChecked) {
    return ANSWER_STATES.CORRECT
  }

  if (!isAnswerCorrect && isAnswerChecked) {
    return ANSWER_STATES.INCORRECT
  }

  if (hasAnswerBeenChosen && isAnswerCorrect && !isAnswerChecked) {
    return ANSWER_STATES.CORRECT_NOT_CHOSEN
  }

  return ANSWER_STATES.NOTHING_CHOSEN
}

// eslint-disable-next-line react-refresh/only-export-components
export const getAnswerTextStyles = (answerState: ANSWER_STATES_KEYS) => {
  return classNames(
    {'text-gray-500': ANSWER_STATES.NOTHING_CHOSEN === answerState},
    {'text-green-500': ANSWER_STATES.CORRECT === answerState},
    {'text-yellow-600': ANSWER_STATES.CORRECT_NOT_CHOSEN === answerState},
    {'text-red-500': ANSWER_STATES.INCORRECT === answerState}
  )
};

export const AnswerState: FC<AnswerStateProps> = ({ isAnswerCorrect, isAnswerChecked, hasAnswerBeenChosen }) => {
  const answerState = getAnswerState({isAnswerCorrect, isAnswerChecked, hasAnswerBeenChosen});
  const answerStateStyles = getAnswerTextStyles(answerState);

  return (
    <NullWrapper isVisible={hasAnswerBeenChosen}>
      <p className={answerStateStyles}>
        {ANSWER_STATE_TEXT[answerState]}
      </p>
    </NullWrapper>
  )
}