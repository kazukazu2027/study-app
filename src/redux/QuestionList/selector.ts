import { createSelector } from "reselect";
import { RootState } from "../store";

const questionsSelector = (state: RootState) => state.question;

export const getQuestionDataListSelector = createSelector(
  [questionsSelector],
  (state) => state.questionDataList
);

export const getQuestionDataSelector = createSelector(
  [questionsSelector],
  (state) => state.questionData
);

export const getQuestionNumberSelector = createSelector(
  [questionsSelector],
  (state) => state.questionNumber
);
