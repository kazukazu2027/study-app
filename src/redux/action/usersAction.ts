export type signIn = {
  isSignedIn: boolean;
  userName: string;
  uid: string;
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
export const ADD_USER_ID = "add user ID";
export const addUserID = (uid: string) => {
  return {
    type: ADD_USER_ID as typeof ADD_USER_ID,
    uid,
  };
};

export type UserType =
  | ReturnType<typeof signInUserName>
  | ReturnType<typeof signInEmail>
  | ReturnType<typeof signInPassword>
  | ReturnType<typeof signInConfirmPassword>
  | ReturnType<typeof addUserID>
  ;
