import * as Actions from "../action/questionAction";
import { QuestionType } from "../action/questionAction";
import { questionData } from "../../types/questionTypes";

export const initialState = {
  questionDataList: [] as questionData[],
  questionNumber: 0 as number,
  questionCategory: "" as string,
  questionData: [] as questionData[],
  theNumberOfQuestions: 0 as number,
};

export const question = (
  state = initialState,
  action: QuestionType
): typeof initialState => {
  switch (action.type) {
    case Actions.GET_SLICE_QUESTION_DATA_LIST: {
      const { questionDataList } = action;
      return { ...state, questionDataList };
    }
    case Actions.QUESTION_NUMBER: {
      const { questionNumber } = action;
      return { ...state, questionNumber };
    }
    case Actions.QUESTION_CATEGORY: {
      const { questionCategory } = action;
      return { ...state, questionCategory };
    }
    case Actions.GET_QUESTION_DATA: {
      const { questionData } = action;
      return { ...state, questionData };
    }
    case Actions.GET_THE_NUMBER_OF_QUESTIONS: {
      const { theNumberOfQuestions } = action;
      return { ...state, theNumberOfQuestions };
    }
    default:
      return state;
  }
};
