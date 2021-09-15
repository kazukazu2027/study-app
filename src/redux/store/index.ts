import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducer";
import { middlewares as customMiddlewares } from "../middleware";
import { favoriteEvent } from "../middleware/favoriteEvent";
import thunk from "redux-thunk";

export type RootState = ReturnType<typeof rootReducer>;

export const initializeStore = () => {
  // const middlewares = [...customMiddlewares];
  return createStore(rootReducer, applyMiddleware(favoriteEvent, thunk));
};
