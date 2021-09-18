import { Data } from "../../pages/components/QuestionPage/Question";
import * as Actions from "../action/questionAction";
import { QuestionType } from "../action/questionAction";
import firebase from "firebase";

export const initialState = {
  questionDataList: [] as firebase.firestore.DocumentData[],
  questionNumber: 0 as number,
  questionCategory: "" as string,
  questionData: [] as Data[],
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
    default:
      return state;
  }
};
