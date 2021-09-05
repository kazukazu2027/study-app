import "../../styles/globals.css";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import authReducer from "../Firebase/authReducer";
import { listenAuthState } from "../Firebase/firebase";
import { useEffect, useReducer } from "react";
import AuthContext from "../context/Auth";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../redux/store/configureStore";

function MyApp({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useReducer(
    authReducer.reducer,
    authReducer.initialState
  );
  useEffect(() => {
    return listenAuthState(dispatch);
  }, []);
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthContext.Provider value={state}>
            <Component {...pageProps} />
          </AuthContext.Provider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
