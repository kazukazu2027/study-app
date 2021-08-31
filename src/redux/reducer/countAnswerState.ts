import * as Actions from "../action/countAnswer";
import { answerData, checkedAnswer } from "../store";

export const initialState = {
  resultQuestionIds: [] as boolean[],
  checkedAnswer: {} as checkedAnswer,
};

export const answer = (
  state = initialState,
  action: Actions.AnswerType
): typeof initialState => {
  switch (action.type) {
    case Actions.COUNT_CORRECT_ANSWER: {
      const { resultQuestionIds } = action;
      return { ...state, resultQuestionIds };
    }
    case Actions.GET_CHECKED_ANSWER: {
      const { checkedAnswer } = action;
      return { ...state, checkedAnswer };
    }
    default:
      return state;
  }
};
