export type Slide = {
  title: string;
  slides: QuestionSlide[];
};

type QuestionSlide = {
  type: "question";
  question: string;
  answers: Answer[];
};
  
export type Answer = {
  id: string;
  text: string;
  correct: boolean;
};
