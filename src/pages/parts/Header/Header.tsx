import Link from "next/link";
import { useState } from "react";
import { auth, Firebase } from "../../../Firebase/firebase";
import HamburgerMenu from "../HumburgerMenu/HamburgerMenu";

const Header = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const clickMenu = () => {
    setDisplayMenu(!displayMenu);
  };
  const logout = () => {
    Firebase.auth().signOut();
  };
  return (
    <div className="text-gray-700 text-xl relative">
      <div className="flex">
        <div className="pt-2">
          <Link href="/">
            <h1 className="font-bold">学習サービス</h1>
          </Link>
        </div>

        {auth.currentUser ? (
          <div className="ml-auto" onClick={clickMenu}>
            <HamburgerMenu />
          </div>
        ) : (
          <div className="ml-auto">
            <Link href={"SignUpPage"}>
              <button className="text-center text-sm py-1 rounded bg-green text-white bg-green-400 my-2 mr-5 px-2">
                会員登録
              </button>
            </Link>
            <Link href={"SignInPage"}>
              <button className=" text-center text-sm py-1 rounded bg-green text-green-400 border border-green-400 my-2 px-2">
                ログイン
              </button>
            </Link>
          </div>
        )}
      </div>
      {displayMenu && (
        <div className="z-10 bg-gray-200 absolute inset-0 w-9/12 text-center text-base h-60">
          <ul className="py-10">
            <Link href="/">
              <li className="hover:bg-gray-100 cursor-pointer">ホーム</li>
            </Link>
            <a href="">
              <li className="hover:bg-gray-100 pt-2">学ぶ</li>
            </a>
            <a href="">
              <li className="hover:bg-gray-100 pt-2">新規登録</li>
            </a>
            <a href="">
              {auth.currentUser ? (
                <Link href="SignInPage">
                  <div className="">
                    <li
                      className="text-red-500 hover:bg-gray-100 pt-2"
                      onClick={logout}
                    >
                      ログアウト
                    </li>
                  </div>
                </Link>
              ) : (
                <Link href="SignInPage">
                  <li className="px-6 pt-2 text-red-500 hover:bg-gray-100">
                    ログイン
                  </li>
                </Link>
              )}
            </a>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Header;
