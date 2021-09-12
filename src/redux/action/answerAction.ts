import { AnswerList } from "../../pages/components/QuestionPage/Question";
export type answerData = {
  id: string;
  question: string;
  isCorrect: boolean;
};

export type checkedAnswer = {
  isChecked: boolean;
  checkedAnswerString: string;
};

export const COUNT_CORRECT_ANSWER = "count correct answer";
export const countCorrectAnswer = (resultQuestionIds: boolean[]) => {
  return {
    type: COUNT_CORRECT_ANSWER as typeof COUNT_CORRECT_ANSWER,
    resultQuestionIds,
  };
};

export const GET_CHECKED_ANSWER = "get checked answer";
export const getCheckedAnswer = (checkedAnswer: checkedAnswer) => {
  return {
    type: GET_CHECKED_ANSWER as typeof GET_CHECKED_ANSWER,
    checkedAnswer,
  };
};

export const ANSWER_LIST = "answerList";
export const getAnswerList = (answerList: AnswerList[]) => {
  return {
    type: ANSWER_LIST as typeof ANSWER_LIST,
    answerList,
  };
};

export type AnswerType =
  | ReturnType<typeof countCorrectAnswer>
  | ReturnType<typeof getCheckedAnswer>
  | ReturnType<typeof getAnswerList>;
