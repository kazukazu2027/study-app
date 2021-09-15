export const UPDATE_FAVORITE_WORD = "add favorite word";
export const updateFavoriteWordAction = (checkedQuestionIds: string[]) => {
  return {
    type: UPDATE_FAVORITE_WORD as typeof UPDATE_FAVORITE_WORD,
    checkedQuestionIds,
  };
};

export type UpdateFavoriteType = ReturnType<typeof updateFavoriteWordAction>;
