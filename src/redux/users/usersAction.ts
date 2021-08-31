import { answerData, checkedAnswer } from "../store";

export type signIn = {
  isSignedIn: boolean;
  userName: string;
  uid: string;
};

export const SIGN_IN = "sign in";
export const signInAction = (signIn:signIn) => {
  return {
    type: SIGN_IN as typeof SIGN_IN,
    signIn
  };
};

export type UserType =
  | ReturnType<typeof signInAction>
