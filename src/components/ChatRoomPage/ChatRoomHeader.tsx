import React from "react";
import RoomTitle from "../ChatPage/RoomTitle";
import Link from "next/link";

type Props = {
  roomName: string;
};

const ChatRoomPageHeader = (props: Props) => {
  const { roomName } = props;
  return (
    <>
      <RoomTitle>{roomName}</RoomTitle>
      <Link href="/SelectChatRoomPage">
        <button className="ml-auto mr-6 my-2 rounded px-2 bg-gray-500 text-gray-50">
          戻る
        </button>
      </Link>
    </>
  );
};

export default ChatRoomPageHeader;
