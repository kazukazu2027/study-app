import { Data } from "../../pages/components/QuestionPage/Question";
import * as Actions from "../action/questionList";
import { QuestionType } from "../action/questionList";
import { questionList } from "../store";

export const initialState = {
  questionDataList: [] as Data[],
  questionData: {} as questionList,
  questionNumber: 0 as number,
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
    case Actions.QUESTION_DATA: {
      const { questionData } = action;
      return { ...state, questionData };
    }
    case Actions.QUESTION_NUMBER: {
      const { questionNumber } = action;
      return { ...state, questionNumber };
    }
    default:
      return state;
  }
};
