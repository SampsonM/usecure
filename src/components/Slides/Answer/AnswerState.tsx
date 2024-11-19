import { FC } from "react";
import { NullWrapper } from "../../NullWrapper/NullWrapper";

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

// Could be overkill, kept in for now
// eslint-disable-next-line react-refresh/only-export-components
export const ANSWER_STATE_COLORS = {
  [ANSWER_STATES.CORRECT]: 'green',
  [ANSWER_STATES.INCORRECT]: 'red',
  [ANSWER_STATES.NOTHING_CHOSEN]: 'gray',
  [ANSWER_STATES.CORRECT_NOT_CHOSEN]: 'yellow',
}

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

export const AnswerState: FC<AnswerStateProps> = ({ isAnswerCorrect, isAnswerChecked, hasAnswerBeenChosen }) => {
  const answerState = getAnswerState({isAnswerCorrect, isAnswerChecked, hasAnswerBeenChosen});
  const answerColor = ANSWER_STATE_COLORS[answerState];

  return (
    <NullWrapper isVisible={hasAnswerBeenChosen}>
      <p className={`text-${answerColor}-600`}>{ANSWER_STATE_TEXT[answerState]}</p>
    </NullWrapper>
  )
}