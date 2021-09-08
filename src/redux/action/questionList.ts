import { AnswerList, Data } from "../../pages/components/QuestionPage/Question";

export const GET_QUESTION_DATA_LIST = "get question data list";
export const getQuestionDataList = (questionDataList: Data[]) => {
  return {
    type: GET_QUESTION_DATA_LIST as typeof GET_QUESTION_DATA_LIST,
    questionDataList,
  };
};

export const QUESTION_NUMBER = "question number";
export const getQuestionNumber = (questionNumber: number) => {
  return {
    type: QUESTION_NUMBER as typeof QUESTION_NUMBER,
    questionNumber,
  };
};

export const ANSWER_LIST = "answerList";
export const getAnswerList = (answerList: AnswerList[]) => {
  return {
    type: ANSWER_LIST as typeof ANSWER_LIST,
    answerList,
  };
};

export type QuestionType =
  | ReturnType<typeof getQuestionDataList>
  | ReturnType<typeof getQuestionNumber>
  | ReturnType<typeof getAnswerList>;
