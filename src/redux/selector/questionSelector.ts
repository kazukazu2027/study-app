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

export const getQuestionCategorySelector = createSelector(
  [questionsSelector],
  (state) => state.questionCategory
);

export const getQuestionDataSelector = createSelector(
  [questionsSelector],
  (state) => state.questionData
);
