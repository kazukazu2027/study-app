import * as Actions from "../storeAction/favoriteAction";

export const initialState = {
  checkedQuestionIds: [] as string[],
};

export const favorite = (
  state = initialState,
  action: Actions.UpdateFavoriteType
): typeof initialState => {
  switch (action.type) {
    case Actions.UPDATE_FAVORITE_WORD: {
      const { checkedQuestionIds } = action;
      console.log(checkedQuestionIds)
      return { ...state, checkedQuestionIds };
    }

    default:
      return state;
  }
};
