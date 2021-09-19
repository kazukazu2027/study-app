import React, { useState } from "react";
import Layout from "./layouts/Layout";
import Button from "./parts/Button/Button";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { registerUserName } from "../redux/action/usersAction";

export const InputUserNamePage = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const inputUserName = (e: any) => {
    if (userName === "") {
      setUserName("匿名");
    } else {
      setUserName(e.target.value);
    }
  };
  const sendUserName = () => {
    dispatch(registerUserName(userName));
  };
  return (
    <div className="bg-gray-50 min-h-screen">
      <Layout>
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
      </Layout>
    </div>
  );
};

export default InputUserNamePage;
