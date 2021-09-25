import React, { useState, useEffect } from "react";
import SubTitle from "./parts/Title/SubTitle";
import Link from "next/dist/client/link";
import Button from "./parts/Button/Button";
import { db } from "../Firebase/firebase";
import firebase from "firebase";
import Layout from "./layouts/Layout";
import Firebase from "firebase";
import { makeRoomId } from "../functions/makeRoomId";

const SelectChatRoomPage = () => {
  const [roomName, setRoomName] = useState("");
  const [chatRoom, setChatRoom] = useState([{ id: "", name: "", uid: "" }]);
  const uid = Firebase.auth().currentUser?.uid;

  const onChangeRoomName = (e: any) => {
    setRoomName(e.target.value);
  };

  const addChatRoom = () => {
    const id = makeRoomId();
    db.collection("rooms").doc(id).set({
      roomName: roomName,
      id: id,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      uid: uid,
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
        <input
          type="text"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="userName"
          placeholder="チャットルーム名"
          onChange={onChangeRoomName}
          value={roomName}
        />
        <Button color="bg-blue-400" onClick={addChatRoom}>
          追加
        </Button>
      </div>
      <div>
        {chatRoom.map((room) => {
          const deleteChatRoom = () => {
            db.collection("rooms").doc(room.id).delete();
          };
          return (
            <div className="flex border-t-2 py-4 ">
              <Link href={`/chats/${room.id}`}>
                <div className=" ">
                  <div className="pl-4 pt-1  font-semibold">
                    <p className="">{room.name}</p>
                  </div>
                </div>
              </Link>
              {room.uid === uid && (
                <button
                  className="bg-red-400 py-1 text-white font-bold  px-6 rounded ml-auto mr-6"
                  onClick={deleteChatRoom}
                >
                  削除
                </button>
              )}
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
