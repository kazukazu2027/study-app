import { createSelector } from "reselect";
import { RootState } from "../store";

const answerSelector = (state: RootState) => state.answer;

export const getCountAnswerSelector = createSelector(
  [answerSelector],
  (state) => state.correctQuestionIds
);

export const getCheckedAnswerStringSelector = createSelector(
  [answerSelector],
  (state) => state.checkedAnswer.checkedAnswerString
);

export const getCheckedAnswerIsCheckedSelector = createSelector(
  [answerSelector],
  (state) => state.checkedAnswer.isChecked
);

