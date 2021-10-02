import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { db } from "../../Firebase/firebase";
import ChatPosts from "../../components/ChatPage/ChatPosts";
import { useRouter } from "next/dist/client/router";
import { getData } from "../../functions/getData";
import Layout from "../../layouts/Layout";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getUserNameSelector } from "../../redux/selector/chatSelector";
import ChatRoomPageHeader from "../../components/ChatRoomPage/ChatRoomHeader";
import AddChatText from "../../components/ChatRoomPage/AddChatText";

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
  const onChangeMsg = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMsg(e.target.value);
  };

  // テキストを送った際に自動スクロール
  useEffect(() => {
    const scrollArea = document.getElementById("scrollArea");
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }, [posts]);

  return (
    <Layout>
      <div className="bg-gray-200 mt-3 flex">
        <ChatRoomPageHeader roomName={roomsData[0].roomName} />
      </div>
      <div className="overflow-auto h-xl" id="scrollArea">
        {posts.map((post) => {
          return <ChatPosts key={post.id} post={post} />;
        })}
      </div>
      <div className="p-0 bg-gray-100 w-full absolute bottom-0">
        <AddChatText sendMsg={sendMsg} onChangeMsg={onChangeMsg} msg={msg} />
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
