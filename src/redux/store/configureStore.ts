import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "../reducer";

interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION__: any;
}
declare var window: ExtendedWindow;

// 永続化の設定
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "answer", "question"],
};

// 永続化設定されたReducerとして定義
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: any = createStore(
  persistedReducer,
  process.browser &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);
export default store;
