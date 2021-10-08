import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Firebase } from "../../Firebase/firebase";
import { RootState } from "../../redux/store";
import { getUidSelector } from "../../redux/selector/userSelector";
import { getChatUserNameData } from "../../functions/getChatUserNameData";

const Header = () => {
  const user = Firebase.auth().currentUser;
  const logout = () => {
    Firebase.auth().signOut();
  };

  const selector = useSelector((state: RootState) => state);
  const [userName, setUserName] = useState("");
  const isUserName = async () => {
    const uid = await getUidSelector(selector);
    const userData = await getChatUserNameData(uid);
    await setUserName(userData.userName);
  };
  useEffect(() => {
    isUserName();
  }, []);

  return (
    <div className="text-gray-200 relative">
      <div className="flex py-2 px-3 bg-gray-600">
        <div>
          <Link href="/">
            <p className=" text-lg font-bold pt-1">First Encareer</p>
          </Link>
        </div>
        {user ? (
          <div className="ml-auto">
            <Link href={"/SignInPage"}>
              <button
                className="text-center text-sm py-1 rounded text-white bg-red-400 mr-5  px-2"
                onClick={logout}
              >
                ログアウト
              </button>
            </Link>
          </div>
        ) : (
          <div className="ml-auto">
            <Link href={"SignUpPage"}>
              <button className="text-center text-sm py-1 rounded  text-white bg-blue-400 mr-5 px-2">
                会員登録
              </button>
            </Link>
            <Link href={"SignInPage"}>
              <button className=" text-center text-sm py-1 rounded  text-blue-400 border border-blue-400 bg-gray-50  px-2">
                ログイン
              </button>
            </Link>
          </div>
        )}
      </div>
      {user && (
        <div className="flex mt-4 mx-3 rounded-md bg-gray-500">
          <div className="py-3 flex w-full justify-around">
            <Link href="/">
              <h1 className="font-bold">ホーム</h1>
            </Link>
            <Link href="QuestionMainPage">
              <h1 className="font-bold">クイズ</h1>
            </Link>
            <Link href="AllWordPage">
              <h1 className="font-bold">一覧</h1>
            </Link>
            <Link
              href={userName === "" ? "InputUserName" : "SelectChatRoomPage"}
            >
              <h1 className="font-bold">掲示板</h1>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
