import { AnswerList } from "../../pages/components/QuestionPage/Question";
import * as Actions from "../action/answerAction";

export const initialState = {
  answerData: [] as Actions.AnswerData[],
  checkedAnswer: {} as Actions.checkedAnswer,
  answerList: [] as AnswerList[],
};

export const answer = (
  state = initialState,
  action: Actions.AnswerType
): typeof initialState => {
  switch (action.type) {
    case Actions.COUNT_CORRECT_ANSWER: {
      const { answerData } = action;
      return { ...state, answerData };
    }
    case Actions.GET_CHECKED_ANSWER: {
      const { checkedAnswer } = action;
      return { ...state, checkedAnswer };
    }
    case Actions.ANSWER_LIST: {
      const { answerList } = action;
      return { ...state, answerList };
    }
    default:
      return state;
  }
};
