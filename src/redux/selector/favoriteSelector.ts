import { createSelector } from "reselect";
import { RootState } from "../store";

const favoriteSelector = (state: RootState) => state.favorite;

export const addFavoriteWordsSelector = createSelector(
  [favoriteSelector],
  (state) => state.questionId
);
