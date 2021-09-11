import { AnswerList, Data } from "../../pages/components/QuestionPage/Question";
import * as Actions from "../action/questionList";
import { QuestionType } from "../action/questionList";

export const initialState = {
  questionDataList: [] as Data[],
  questionNumber: 0 as number,
  answerList: [] as AnswerList[],
  shuffleAnswerList: [] as AnswerList[],
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
    case Actions.ANSWER_LIST: {
      const { answerList } = action;
      return { ...state, answerList };
    }
    case Actions.SHUFFLE_ANSWER_LIST: {
      const { shuffleAnswerList } = action;
      return { ...state, shuffleAnswerList };
    }
    case Actions.QUESTION_CATEGORY: {
      const { questionCategory } = action;
      return { ...state, questionCategory };
    }
    default:
      return state;
  }
};
