import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducer";
import thunk from "redux-thunk";

export type RootState = ReturnType<typeof rootReducer>;

export const initializeStore = () => {
  // const middlewares = [...customMiddlewares];
  return createStore(rootReducer, applyMiddleware(thunk));
};
