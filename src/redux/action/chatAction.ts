export type chatUserName = {
  id?: string;
  userName: string;
};

export const GET_CHAT_ROOM_ACTION = "add get chat room";
export const getChatRoomAction = (roomName: string) => {
  return {
    type: GET_CHAT_ROOM_ACTION as typeof GET_CHAT_ROOM_ACTION,
    roomName,
  };
};
export const GET_CHAT_USER_NAME_ACTION = "add get chat user name";
export const getChatUserNameAction = (userName: chatUserName[]) => {
  return {
    type: GET_CHAT_USER_NAME_ACTION as typeof GET_CHAT_USER_NAME_ACTION,
    userName,
  };
};

export type FavoriteType =
  | ReturnType<typeof getChatRoomAction>
  | ReturnType<typeof getChatUserNameAction>;
