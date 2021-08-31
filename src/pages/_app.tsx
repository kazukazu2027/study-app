import "../../styles/globals.css";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import AuthProvider from "../context/Auth";
import authReducer from "../Firebase/authReducer";
import { listenAuthState } from "../Firebase/firebase";
import { useEffect, useReducer } from "react";
import AuthContext from "../context/Auth";
import { Provider } from "react-redux";
import { initializeStore } from "../redux/store";

export const store = initializeStore();

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
        <AuthContext.Provider value={state}>
          <Component {...pageProps} />
        </AuthContext.Provider>
      </Provider>
    </>
  );
}

export default MyApp;
