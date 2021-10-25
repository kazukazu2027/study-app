import React, { useState } from "react";
import Link from "next/link";
import { db } from "../../Firebase/firebase";
import { useSelector } from "react-redux";
import Layout from "../../layouts/Layout";
import { RootState } from "../../redux/store";
import { getUidSelector } from "../../redux/selector/userSelector";

export const InputUserNamePage = () => {
  const selector = useSelector((state: RootState) => state);
  const uid = getUidSelector(selector);

  const [userName, setUserName] = useState("");
  const inputUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const sendUserName = () => {
    db.collection("users").doc(uid).update({ userName: userName });
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
          <Link href="/chat/SelectChatRoomPage">
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

export default InputUserNamePage;
