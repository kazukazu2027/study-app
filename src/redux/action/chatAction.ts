export type chatUserName = {
  uid?: string;
  userName: string;
};

export const GET_CHAT_ROOM_ACTION = "add get chat room";
export const getChatRoomAction = (roomName: string) => {
  return {
    type: GET_CHAT_ROOM_ACTION as typeof GET_CHAT_ROOM_ACTION,
    roomName,
  };
};
export const IS_HAVE_CHAT_USER_NAME = "is have chat user name";
export const isHaveChatUserName = (isHaveChatUserName: boolean) => {
  return {
    type: IS_HAVE_CHAT_USER_NAME as typeof IS_HAVE_CHAT_USER_NAME,
    isHaveChatUserName,
  };
};

export type FavoriteType =
  | ReturnType<typeof getChatRoomAction>
  | ReturnType<typeof isHaveChatUserName>
  ;
