import * as Actions from "../action/usersAction";

export const initialState = {
  signIn: {} as Actions.signIn,
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

    default:
      return state;
  }
};
