import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { db } from "../../Firebase/firebase";
import RoomTitle from "../components/ChatPage/RoomTitle";
import ChatPosts from "../components/ChatPage/ChatPosts";
import { useRouter } from "next/dist/client/router";
import { getData } from "../../functions/getData";
import Layout from "../layouts/Layout";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getUserNameSelector } from "../../redux/selector/chatSelector";

type Props = {
  roomsData: firebase.firestore.DocumentData[];
};

const ChatRoom = (props: Props) => {
  const { roomsData } = props;
  const selector = useSelector((state: RootState) => state);
  const router = useRouter();
  const userName = getUserNameSelector(selector);
  const chatRoomName: any = router.query.id;
  const [msg, setMsg] = useState("");
  const [posts, setPosts] = useState([
    { id: "", text: "", timestamp: "", userName: "" },
  ]);
  useEffect(() => {
    const unSub = db
      .collection(chatRoomName)
      .orderBy("timestamp")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            text: doc.data().text,
            timestamp: doc.data().timestamp && doc.data().timestamp.toDate(),
            userName: doc.data().userName,
          }))
        )
      );
    return () => {
      unSub();
    };
  }, []);
  const sendMsg = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    db.collection(chatRoomName).add({
      text: msg,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      userName: userName[0].userName,
    });
    setMsg("");
  };
  const onChangeMsg = (e: any) => {
    setMsg(e.target.value);
  };
  useEffect(() => {
    const scrollArea = document.getElementById("scrollArea");
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }, [posts]);

  return (
    <Layout>
      <div className="bg-gray-200 mt-3">
        <RoomTitle>{roomsData[0].roomName}</RoomTitle>
      </div>
      <div className="overflow-auto h-xl" id="scrollArea">
        {posts.map((post) => {
          return <ChatPosts key={post.id} post={post} />;
        })}
      </div>
      <div className="p-0 bg-gray-100 w-full absolute bottom-0">
        <form onSubmit={sendMsg}>
          <div className="p-3 flex justify-between">
            <textarea
              placeholder={"メッセージを送信"}
              className="block border-2 border-green-400 p-3 rounded w-9/12 h-sm"
              onChange={onChangeMsg}
              value={msg}
            />
            <button
              className={`text-white font-bold block rounded px-6 ${
                msg ? "bg-green-400" : "bg-gray-400"
              } `}
              type="submit"
              disabled={!msg}
            >
              送信
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const roomsData = await getData("rooms");
  const paths = await roomsData.map((room) => `/chats/${room.id}`);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const data = await getData("rooms");
  const initRoomsData = await data.filter((data) => data.id === params.id);
  const roomsData = JSON.parse(JSON.stringify(initRoomsData));
  return {
    props: {
      roomsData,
    },
  };
}

export default ChatRoom;
