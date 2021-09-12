import { combineReducers } from "redux";
import { answer } from "./answerReducer";
import { question } from "./questionReducer";
import { user } from "./usersReducer";

export const rootReducer = combineReducers({
  answer,
  question,
  user,
});
