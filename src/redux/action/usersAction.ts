export type signIn = {
  isSignedIn: boolean;
  userName: string;
  uid: string;
};

export const SIGN_IN = "sign in";
export const signInAction = (signIn: signIn) => {
  return {
    type: SIGN_IN as typeof SIGN_IN,
    signIn,
  };
};
export const SEND_USERNAME = "user name";
export const signInUserName = (userName: string) => {
  return {
    type: SEND_USERNAME as typeof SEND_USERNAME,
    userName,
  };
};
export const SEND_EMAIL = "email";
export const signInEmail = (email: string) => {
  return {
    type: SEND_EMAIL as typeof SEND_EMAIL,
    email,
  };
};
export const SEND_PASSWORD = "password";
export const signInPassword = (password: string) => {
  return {
    type: SEND_PASSWORD as typeof SEND_PASSWORD,
    password,
  };
};
export const SEND_CONFIRM_PASSWORD = "confirm password";
export const signInConfirmPassword = (confirmPassword: string) => {
  return {
    type: SEND_CONFIRM_PASSWORD as typeof SEND_CONFIRM_PASSWORD,
    confirmPassword,
  };
};
export const CHAT_USER_NAME = "register user name";
export const chatUserName = (chatUserName: string) => {
  return {
    type: CHAT_USER_NAME as typeof CHAT_USER_NAME,
    chatUserName,
  };
};

export type UserType =
  | ReturnType<typeof signInAction>
  | ReturnType<typeof signInUserName>
  | ReturnType<typeof signInEmail>
  | ReturnType<typeof signInPassword>
  | ReturnType<typeof signInConfirmPassword>
  | ReturnType<typeof chatUserName>;
