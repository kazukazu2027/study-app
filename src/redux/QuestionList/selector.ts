import { createSelector } from "reselect";
import { RootState } from "../store";

const questionsSelector = (state: RootState) => state.question;

export const getQuestionDataListSelector = createSelector(
  [questionsSelector],
  (state) => state.questionDataList
);

export const getQuestionNumberSelector = createSelector(
  [questionsSelector],
  (state) => state.questionNumber
);

export const getAnswerListSelector = createSelector(
  [questionsSelector],
  (state) => state.answerList
);

export const getShuffleAnswerListSelector = createSelector(
  [questionsSelector],
  (state) => state.shuffleAnswerList
);
