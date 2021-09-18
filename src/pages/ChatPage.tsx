import React from "react";
import { getData } from "../functions/getData";
import Layout from "./layouts/Layout";
import firebase from 'firebase'

type Props = {
  content: firebase.firestore.DocumentData[]
}

const ChatPage = (props:Props) => {
  const {content} = props
  console.log(content)
  return (
    <div className="relative min-h-screen">
      <Layout>
        <div className="p-0 bg-gray-100 w-full absolute bottom-0">
          <div className="p-3 flex justify-between">
            <input
              type="text"
              placeholder={"メッセージを送信"}
              className="block border-2 border-green-400 p-3 rounded w-9/12"
            />
            <button className="text-white font-bold block rounded bg-green-400 w-2/12 ">
              送信
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export async function getStaticProps() {
  const content = await getData("chat");
  return {
    props: {
      content,
    },
  };
}

export default ChatPage;
