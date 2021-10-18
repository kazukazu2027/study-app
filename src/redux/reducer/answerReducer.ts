import {
  AnswerList,
  isCheckedAnswer,
  userAnswerData,
} from "../../types/questionTypes";
import * as Actions from "../action/answerAction";

export const initialState = {
  answerData: [] as userAnswerData[],
  checkedAnswer: {} as isCheckedAnswer,
  answerList: [] as AnswerList[],
};

export const answer = (
  state = initialState,
  action: Actions.AnswerType
): typeof initialState => {
  switch (action.type) {
    case Actions.GET_RESULT_ANSWER_ACTION: {
      const { answerData } = action;
      return { ...state, answerData };
    }
    case Actions.GET_CHECKED_ANSWER_ACTION: {
      const { checkedAnswer } = action;
      return { ...state, checkedAnswer };
    }
    default:
      return state;
  }
};
