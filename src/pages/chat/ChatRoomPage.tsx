import React, { useState, useEffect } from "react";
import ChatPosts from "../../components/ChatPage/ChatPosts";
import AddChatText from "../../components/ChatRoomPage/AddChatText";
import ChatRoomPageHeader from "../../components/ChatRoomPage/ChatRoomHeader";
import Layout from "../../layouts/Layout";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { db } from "../../Firebase/firebase";
import { getUidSelector } from "../../redux/selector/userSelector";
import { getChatUserNameData } from "../../functions/getChatUserNameData";
import { sendMsgToDatabase } from "../../functions/sendMsg";

type Props = {
  roomsData: {
    id: string;
    roomName: string;
    timestamp: firebase.firestore.FieldValue;
    uid: string;
  };
};

const ChatRoomPage = (props: Props) => {
  const { roomsData } = props;
  const selector = useSelector((state: RootState) => state);
  const [msg, setMsg] = useState("");
  const [posts, setPosts] = useState([
    { id: "", text: "", timestamp: "", userName: "" },
  ]);
  useEffect(() => {
    const unSub = db
      .collection("rooms")
      .doc(roomsData.roomName)
      .collection("messages")
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
  const sendMsg = async (e: React.FormEvent<HTMLFormElement>) => {
    const uid = await getUidSelector(selector);
    const userData = await getChatUserNameData(uid);
    e.preventDefault();
    sendMsgToDatabase(
      roomsData.roomName,
      msg,
      firebase.firestore.FieldValue.serverTimestamp(),
      userData.userName
    );
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
        <ChatRoomPageHeader roomName={roomsData.roomName} />
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

export default ChatRoomPage;
