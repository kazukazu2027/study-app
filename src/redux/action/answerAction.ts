import { isCheckedAnswer, userAnswerData } from "../../types/questionTypes";

export const GET_RESULT_ANSWER_ACTION = "get result answer action";
export const getResultAnswerAction = (answerData: userAnswerData[]) => {
  return {
    type: GET_RESULT_ANSWER_ACTION as typeof GET_RESULT_ANSWER_ACTION,
    answerData,
  };
};

export const GET_CHECKED_ANSWER_ACTION = "get checked answer action";
export const getCheckedAnswerAction = (checkedAnswer: isCheckedAnswer) => {
  return {
    type: GET_CHECKED_ANSWER_ACTION as typeof GET_CHECKED_ANSWER_ACTION,
    checkedAnswer,
  };
};

export type AnswerType =
  | ReturnType<typeof getResultAnswerAction>
  | ReturnType<typeof getCheckedAnswerAction>;
