export const toggleItem = (favoriteIds: string[], questionId: string) => {
  return favoriteIds.includes(questionId)
    ? favoriteIds.filter((id) => id !== questionId)
    : [...favoriteIds, questionId];
};
