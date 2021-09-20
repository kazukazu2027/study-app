import React, { useState } from "react";
import Button from "../../parts/Button/Button";
import Link from "next/link";
import { db, Firebase } from "../../../Firebase/firebase";

export const InputUserName = () => {
  const [userName, setUserName] = useState("");
  const uid = Firebase.auth().currentUser?.uid;
  const inputUserName = (e: any) => {
    setUserName(e.target.value);
  };
  const sendUserName = () => {
    db.collection("userName").add({ uid: uid, userName: userName });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="px-3 text-center pt-10">
        <input
          type="text"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="userName"
          placeholder="お名前を入力"
          onChange={inputUserName}
        />
        <Link href="ChatPage">
          <Button onClick={sendUserName} color="bg-green-400">
            参加する
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default InputUserName;
