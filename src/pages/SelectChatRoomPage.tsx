import React, { useState, useEffect } from "react";
import { db } from "../Firebase/firebase";
import Layout from "../layouts/Layout";
import SubTitle from "../parts/Title/SubTitle";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { getUidSelector } from "../redux/selector/userSelector";
import RoomList from "../components/SelectChatRoomPage/RoomList";
import BottomBorder from "../parts/Border/BottomBorder";
import AddChatRoom from "../components/SelectChatRoomPage/AddChatRoom";

const SelectChatRoomPage = () => {
  const [chatRoom, setChatRoom] = useState([{ id: "", name: "", uid: "" }]);
  const selector = useSelector((state: RootState) => state);
  const uid = getUidSelector(selector);

  useEffect(() => {
    const unSub = db
      .collection("rooms")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setChatRoom(
          snapshot.docs.map((doc) => ({
            id: doc.data().id,
            name: doc.data().roomName,
            uid: doc.data().uid,
          }))
        )
      );
    return () => {
      unSub();
    };
  }, []);

  return (
    <Layout>
      <div className="py-3 pl-4">
        <SubTitle>チャットルーム選択ページ</SubTitle>
      </div>
      <div className="pb-4 text-center">
        <AddChatRoom />
      </div>
      <div>
        {chatRoom.map((room) => {
          return <RoomList key={room.id} room={room} uid={uid} />;
        })}
        {chatRoom.length > 0 && <BottomBorder />}
      </div>
    </Layout>
  );
};

export default SelectChatRoomPage;
