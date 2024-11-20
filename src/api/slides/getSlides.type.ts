export type Course = {
  title: string;
  slides: QuestionSlide[];
};

export type QuestionSlide = {
  type: "question";
  question: string;
  answers: Answer[];
};
  
export type Answer = {
  id: string;
  text: string;
  correct: boolean;
};
