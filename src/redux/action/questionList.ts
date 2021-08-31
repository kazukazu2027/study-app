import { Data } from "../../pages/components/QuestionPage/Question";
import {  questionList } from "../store";


export const GET_QUESTION_DATA_LIST = "get question data list";
export const getQuestionDataList = (questionDataList: Data[]) => {
  return {
    type: GET_QUESTION_DATA_LIST as typeof GET_QUESTION_DATA_LIST,
    questionDataList,
  };
};

export const QUESTION_DATA = "question data";
export const getQuestionData = (questionData: questionList) => {
  return {
    type: QUESTION_DATA as typeof QUESTION_DATA,
    questionData,
  };
};

export const QUESTION_NUMBER = "question number";
export const getQuestionNumber = (questionNumber: number) => {
  return {
    type: QUESTION_NUMBER as typeof QUESTION_NUMBER,
    questionNumber,
  };
};


export type QuestionType =
  | ReturnType<typeof getQuestionDataList>
  | ReturnType<typeof getQuestionData>
  | ReturnType<typeof getQuestionNumber>
  ;
