import { createSelector } from "reselect";
import { RootState } from "../store";

const favoriteSelector = (state: RootState) => state.user;

export const getUserNameSelector = createSelector(
  [favoriteSelector],
  (state) => state.userName
);
export const getEmailSelector = createSelector(
  [favoriteSelector],
  (state) => state.email
);
export const getPasswordSelector = createSelector(
  [favoriteSelector],
  (state) => state.password
);
export const getConfirmPasswordSelector = createSelector(
  [favoriteSelector],
  (state) => state.confirmPassword
);
