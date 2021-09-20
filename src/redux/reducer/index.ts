import { combineReducers } from "redux";
import { answer } from "./answerReducer";
import { question } from "./questionReducer";
import { user } from "./usersReducer";
import { favorite } from "./favoriteReducer";
import { chat } from "./chatReducer";

export const rootReducer = combineReducers({
  answer,
  question,
  user,
  favorite,
  chat,
});
