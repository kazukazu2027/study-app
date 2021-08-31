import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducer";
import thunk from "redux-thunk";

export type answerData = {
  id: string;
  question: string;
  isCorrect: boolean;
};

export type questionList = {
  id: string;
  question: string;
};

export type checkedAnswer = {
  isChecked: boolean;
  checkedAnswerString: string;
};

export type RootState = ReturnType<typeof rootReducer>;

export const initializeStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
