export type Slide = {
  title: string;
  slides: QuestionSlide[];
};

type QuestionSlide = {
  type: "question";
  question: string;
  answers: Answer[];
};
  
type Answer = {
  id: string;
  text: string;
  correct: boolean;
};
