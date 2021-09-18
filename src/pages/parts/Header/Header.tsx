import Link from "next/link";
import { useState } from "react";
import { auth, Firebase } from "../../../Firebase/firebase";

const Header = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const clickMenu = () => {
    setDisplayMenu(!displayMenu);
  };
  const logout = () => {
    Firebase.auth().signOut();
  };
  return (
    <div className="text-gray-200 bg-gray-600 text relative px-2 py-1">
      <div className="flex py-2">
        <div>
          <Link href="/">
            <p className=" text-lg font-bold pt-1">学習サービス</p>
          </Link>
        </div>
        <div className="ml-auto">
          <Link href={"SignUpPage"}>
            <button className="text-center text-sm py-1 rounded bg-green text-white bg-blue-400 mr-5 px-2">
              会員登録
            </button>
          </Link>
          <Link href={"SignInPage"}>
            <button className=" text-center text-sm py-1 rounded bg-green text-blue-400 border border-blue-400 bg-gray-50  px-2">
              ログイン
            </button>
          </Link>
        </div>
      </div>
      <div className="flex py-2">
        <div className="pt-2 flex w-full justify-around">
          <Link href="/">
            <h1 className="font-bold">ホーム</h1>
          </Link>
          <Link href="QuestionMainPage">
            <h1 className="font-bold">クイズ</h1>
          </Link>
          <Link href="AllWordPage">
            <h1 className="font-bold">一覧</h1>
          </Link>
          <Link href="/">
            <h1 className="font-bold">質問</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
