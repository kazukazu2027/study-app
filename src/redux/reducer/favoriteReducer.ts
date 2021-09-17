import * as Actions from "../action/favoriteAction";

export const initialState = {
  questionId: [] as string[],
};

export const favorite = (
  state = initialState,
  action: Actions.FavoriteType
): typeof initialState => {
  switch (action.type) {
    case Actions.ADD_FAVORITE_WORD: {
      const { questionId } = action;
      return { ...state, questionId };
    }

    default:
      return state;
  }
};
