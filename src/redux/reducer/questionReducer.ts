import { AnswerList, Data } from "../../pages/components/QuestionPage/Question";
import * as Actions from "../action/questionAction";
import { QuestionType } from "../action/questionAction";

export const initialState = {
  questionDataList: [] as Data[],
  questionNumber: 0 as number,
  questionCategory: "" as string,
};

export const question = (
  state = initialState,
  action: QuestionType
): typeof initialState => {
  switch (action.type) {
    case Actions.GET_QUESTION_DATA_LIST: {
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
    default:
      return state;
  }
};
