import React, { useState, useEffect } from "react";
import SubTitle from "./parts/Title/SubTitle";
import Link from "next/dist/client/link";
import Button from "./parts/Button/Button";
import { db } from "../Firebase/firebase";
import firebase from "firebase";
import Layout from "./layouts/Layout";

const SelectChatRoomPage = () => {
  const [roomName, setRoomName] = useState("");
  const [chatRoom, setChatRoom] = useState([{ id: "", name: "" }]);

  const onChangeRoomName = (e: any) => {
    setRoomName(e.target.value);
  };

  const addChatRoom = () => {
    db.collection("rooms").add({
      roomName: roomName,
      id: "room" + chatRoom.length,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setRoomName("");
  };

  useEffect(() => {
    const unSub = db
      .collection("rooms")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setChatRoom(
          snapshot.docs.map((doc) => ({
            id: doc.data().id,
            name: doc.data().roomName,
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
        <SubTitle>チャット選択ページ</SubTitle>
      </div>
      <div className="pb-4 text-center">
        <input
          type="text"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="userName"
          placeholder="チャット名"
          onChange={onChangeRoomName}
          value={roomName}
        />
        <Button color="bg-blue-400" onClick={addChatRoom}>
          追加
        </Button>
      </div>
      <div>
        {chatRoom.map((room) => {
          return (
            <div className="border-t-2 py-3">
              <Link href={`/chats/${room.id}`}>
                <div className="pl-4">
                  <a>{room.name}</a>
                </div>
              </Link>
            </div>
          );
        })}
        {chatRoom.length > 0 && (
          <div className=" w-full bg-gray-200 h-border"></div>
        )}
      </div>
    </Layout>
  );
};

export default SelectChatRoomPage;
