export const ADD_FAVORITE_WORD = "add favorite word";
export const addFavoriteWordAction = (questionId: string[]) => {
  return {
    type: ADD_FAVORITE_WORD as typeof ADD_FAVORITE_WORD,
    questionId,
  };
};

export type FavoriteType = ReturnType<typeof addFavoriteWordAction>;
