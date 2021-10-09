import React from "react";
import firebase from "firebase";
import { getData } from "../../../functions/getData";
import { getRoomData } from "../../../functions/getRoomData";
import ChatRoomPage from "../ChatRoomPage";

type Props = {
  roomsData: {
    id: string;
    roomName: string;
    timestamp: firebase.firestore.FieldValue;
    uid: string;
  };
};

const ChatRoom = (props: Props) => {
  const { roomsData } = props;
  return <ChatRoomPage roomsData={roomsData} />;
};

export async function getStaticPaths() {
  const roomsData = await getData("rooms");
  const paths = await roomsData.map((room) => `/chat/room/${room.id}`);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const data = await getRoomData("rooms", params.id);
  const roomsData = JSON.parse(JSON.stringify(data));
  return {
    props: {
      roomsData,
    },
  };
}

export default ChatRoom;
