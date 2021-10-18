export type questionData = {
  answerList: {
    body: string;
    check: boolean;
  };
  category: string;
  explanation: string;
  question: string;
  questionID: string;
};

export type AnswerList = {
  body: string;
  check: boolean;
  category: string;
};

export type userAnswerData = {
  question: string;
  isCorrect: boolean;
  explanation: string;
  id: string;
};

export type isCheckedAnswer = {
  isChecked: boolean;
  checkedAnswerString: string;
};
