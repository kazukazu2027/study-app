import { Middleware } from "redux";
import { toggleItem } from "../../functions/toggleItem";
import * as Actions from "../action/favoriteAction";
import { RootState } from "../store";
import * as StoreActions from "../storeAction/favoriteAction";

export const favoriteEvent: Middleware<Record<string, never>, RootState> =
  ({ dispatch, getState }) =>
  (next) =>
  (action: Actions.FavoriteType) => {
    next(action);
    switch (action.type) {
      case Actions.ADD_FAVORITE_WORD: {
        const { questionId } = action;
        const { checkedQuestionIds } = getState().favorite;

        const newCheckedQuestionIds = toggleItem(
          checkedQuestionIds,
          questionId
        );

        dispatch(StoreActions.updateFavoriteWordAction(newCheckedQuestionIds));
        break;
      }
    }
  };
