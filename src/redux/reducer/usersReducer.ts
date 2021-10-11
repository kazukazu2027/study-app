import * as Actions from "../action/usersAction";

export const initialState = {
  signIn: {} as Actions.signIn,
  userName: "" as string,
  email: "" as string,
  password: "" as string,
  confirmPassword: "" as string,
  uid: "" as string,
};

export const user = (
  state = initialState,
  action: Actions.UserType
): typeof initialState => {
  switch (action.type) {
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
    case Actions.ADD_USER_ID: {
      const { uid } = action;
      return { ...state, uid };
    }

    default:
      return state;
  }
};
