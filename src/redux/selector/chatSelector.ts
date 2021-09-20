import { createSelector } from "reselect";
import { RootState } from "../store";

const favoriteSelector = (state: RootState) => state.chat;

export const getRoomNameSelector = createSelector(
  [favoriteSelector],
  (state) => state.roomName
);
export const getUserNameSelector = createSelector(
  [favoriteSelector],
  (state) => state.userName
);
