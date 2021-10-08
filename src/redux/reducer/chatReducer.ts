import * as Actions from "../action/chatAction";

export const initialState = {
  roomName: "" as string,
  userName: {} as Actions.chatUserName,
  isHaveChatUserName: false as boolean,
};

export const chat = (
  state = initialState,
  action: Actions.FavoriteType
): typeof initialState => {
  switch (action.type) {
    case Actions.GET_CHAT_ROOM_ACTION: {
      const { roomName } = action;
      return { ...state, roomName };
    }
    case Actions.IS_HAVE_CHAT_USER_NAME: {
      const { isHaveChatUserName } = action;
      return { ...state, isHaveChatUserName };
    }

    default:
      return state;
  }
};
