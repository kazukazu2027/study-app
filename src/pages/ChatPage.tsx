import React, { useState, useEffect } from "react";
import Layout from "./layouts/Layout";
import firebase from "firebase";
import { db } from "../Firebase/firebase";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { getChatUserNameSelector } from "../redux/selector/userSelector";

const ChatPage = () => {
  const selector = useSelector((state: RootState) => state);
  const userName = getChatUserNameSelector(selector);
  console.log(userName);
  const [msg, setMsg] = useState("");
  const [posts, setPosts] = useState([
    { id: "", text: "", timestamp: "", userName: "" },
  ]);
  useEffect(() => {
    const unSub = db
      .collection("posts")
      .orderBy("timestamp")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            text: doc.data().text,
            timestamp: doc.data().timestamp,
            userName: userName,
          }))
        )
      );
    return () => {
      unSub();
    };
  }, []);
  const sendMsg = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    db.collection("posts").add({
      text: msg,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMsg('')
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
  console.log(posts);
  return (
    <div className="relative min-h-screen">
      <Layout>
        <div className="bg-gray-200 mt-3">
          <h2 className="py-3 font-bold pl-3">RoomA</h2>
        </div>
        <div className="overflow-auto h-96" id="scrollArea">
          {posts.map((post) => {
            return (
              <div key={post.id} className="my-2 pl-2">
                {post.userName ? (
                  <p className="font-bold">{post.userName}</p>
                ) : (
                  <p className="font-bold">匿名</p>
                )}
                <p className="font-bold">{post.userName}</p>
                <p className="py-2 px-2 bg-gray-200  inline-block rounded-md rounded-tl-none">
                  {post.text}
                </p>
                {/* <p>{dayjs(post.timestamp).format("YYYY/MM/DD HH:mm")}</p> */}
              </div>
            );
          })}
        </div>
        <div className="p-0 bg-gray-100 w-full absolute bottom-0">
          <form onSubmit={sendMsg}>
            <div className="p-3 flex justify-between">
              <input
                type="text"
                placeholder={"メッセージを送信"}
                className="block border-2 border-green-400 p-3 rounded w-9/12"
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
    </div>
  );
};

export default ChatPage;
