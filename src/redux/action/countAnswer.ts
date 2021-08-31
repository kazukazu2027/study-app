import { Data } from "../../pages/components/QuestionPage/Question";
import { answerData, checkedAnswer } from "../store";

export const COUNT_CORRECT_ANSWER = "count correct answer";
export const countCorrectAnswer = (correctQuestionIds: answerData[]) => {
  return {
    type: COUNT_CORRECT_ANSWER as typeof COUNT_CORRECT_ANSWER,
    correctQuestionIds,
  };
};

export const GET_CHECKED_ANSWER = "get checked answer";
export const getCheckedAnswer = (checkedAnswer: checkedAnswer) => {
  return {
    type: GET_CHECKED_ANSWER as typeof GET_CHECKED_ANSWER,
    checkedAnswer,
  };
};

export type AnswerType =
  | ReturnType<typeof countCorrectAnswer>
  | ReturnType<typeof getCheckedAnswer>;
