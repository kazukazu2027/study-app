import React, { useState } from "react";
import Link from "next/link";
import { db, Firebase } from "../Firebase/firebase";
import { useDispatch } from "react-redux";
import { getChatUserNameAction } from "../redux/action/chatAction";
import Layout from "../layouts/Layout";

export const InputUserName = () => {
  const [userName, setUserName] = useState("");
  const uid = Firebase.auth().currentUser?.uid;
  const dispatch = useDispatch();
  const inputUserName = (e: any) => {
    setUserName(e.target.value);
  };
  const sendUserName = () => {
    db.collection("users").doc(uid).update({ userName: userName });
    dispatch(getChatUserNameAction([{ uid: uid, userName: userName }]));
  };

  return (
    <Layout>
      <div className="bg-gray-50">
        <div className="px-3 text-center pt-10">
          <div className="text-left pb-10">
            <p>チャットで使う名前を設定してください</p>
            <p>※一度設定すると変更できません</p>
          </div>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-10"
            name="userName"
            placeholder="お名前を入力"
            onChange={inputUserName}
          />
          <Link href="SelectChatRoomPage">
            <button
              onClick={sendUserName}
              className={`text-white font-bold  rounded px-12 py-2 ${
                userName ? "bg-green-400" : "bg-gray-400"
              } `}
              disabled={!userName}
            >
              参加する
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default InputUserName;
