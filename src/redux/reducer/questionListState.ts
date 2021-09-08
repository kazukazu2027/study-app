import { AnswerList, Data } from "../../pages/components/QuestionPage/Question";
import * as Actions from "../action/questionList";
import { QuestionType } from "../action/questionList";
import { questionList } from "../store";

export const initialState = {
  questionDataList: [] as Data[],
  questionData: {} as questionList,
  questionNumber: 0 as number,
  answerList: [] as AnswerList[],
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
    case Actions.ANSWER_LIST: {
      const { answerList } = action;
      return { ...state, answerList };
    }
    default:
      return state;
  }
};
