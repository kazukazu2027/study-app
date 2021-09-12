import { Data } from "../../pages/components/QuestionPage/Question";

export type questionList = {
  id: string;
  question: string;
};

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

export const QUESTION_CATEGORY = "question category";
export const getQuestionCategory = (questionCategory: string) => {
  return {
    type: QUESTION_CATEGORY as typeof QUESTION_CATEGORY,
    questionCategory,
  };
};

export type QuestionType =
  | ReturnType<typeof getQuestionDataList>
  | ReturnType<typeof getQuestionNumber>
  | ReturnType<typeof getQuestionCategory>;
