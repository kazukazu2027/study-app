import { combineReducers } from "redux";
import { answer } from "./countAnswerState";
import { question } from "./questionListState";
import { user } from "../users/usersReducer";

export const rootReducer = combineReducers({
  answer,
  question,
  user,
});
