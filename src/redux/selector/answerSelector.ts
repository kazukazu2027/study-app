import { createSelector } from "reselect";
import { RootState } from "../store";

const answerSelector = (state: RootState) => state.answer;

export const getCountAnswerSelector = createSelector(
  [answerSelector],
  (state) => state.resultQuestionIds
);

export const getCheckedAnswerStringSelector = createSelector(
  [answerSelector],
  (state) => state.checkedAnswer.checkedAnswerString
);

export const getCheckedAnswerIsCheckedSelector = createSelector(
  [answerSelector],
  (state) => state.checkedAnswer.isChecked
);

export const getAnswerListSelector = createSelector(
  [answerSelector],
  (state) => state.answerList
);
