import * as Actions from "../action/usersAction";

export const initialState = {
  signIn: {} as Actions.signIn,
  userName: "" as string,
  email: "" as string,
  password: "" as string,
  confirmPassword: "" as string,
  chatUserName: "" as string,
};

export const user = (
  state = initialState,
  action: Actions.UserType
): typeof initialState => {
  switch (action.type) {
    case Actions.SIGN_IN: {
      const { signIn } = action;
      return { ...state, signIn };
    }
    case Actions.SEND_USERNAME: {
      const { userName } = action;
      return { ...state, userName };
    }
    case Actions.SEND_EMAIL: {
      const { email } = action;
      return { ...state, email };
    }
    case Actions.SEND_PASSWORD: {
      const { password } = action;
      return { ...state, password };
    }
    case Actions.SEND_CONFIRM_PASSWORD: {
      const { confirmPassword } = action;
      return { ...state, confirmPassword };
    }
    case Actions.REGISTER_USER_NAME: {
      const { chatUserName } = action;
      return { ...state, chatUserName };
    }

    default:
      return state;
  }
};
