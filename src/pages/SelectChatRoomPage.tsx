import React, { useState, useEffect } from "react";
import SubTitle from "./parts/Title/SubTitle";
import Link from "next/dist/client/link";
import Button from "./parts/Button/Button";
import { db } from "../Firebase/firebase";
import firebase from "firebase";

const SelectChatRoomPage = () => {
  const [roomName, setRoomName] = useState("");
  const [chatRoom, setChatRoom] = useState([{ id: "", name: "" }]);

  const onChangeRoomName = (e: any) => {
    setRoomName(e.target.value);
  };

  const addChatRoom = () => {
    db.collection("rooms").add({
      roomName: roomName,
      id: "room" + roomName.length,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
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
    <>
      <SubTitle>チャット選択ページ</SubTitle>
      <div>
        {chatRoom.map((room) => {
          return (
            <div className="border-t-2 py-3">
              <Link href={`/chats/${room.id}`}>
                <button>{room.name}</button>
              </Link>
            </div>
          );
        })}

        <div className=" w-full bg-gray-200 h-0.5"></div>
      </div>
      <input
        type="text"
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name="userName"
        placeholder="チャット名"
        onChange={onChangeRoomName}
      />
      <Button color="bg-blue-400" onClick={addChatRoom}>
        追加
      </Button>
    </>
  );
};

export default SelectChatRoomPage;
