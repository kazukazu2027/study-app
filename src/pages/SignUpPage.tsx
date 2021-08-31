import React, { useCallback, useState } from "react";
import Layout from "./layouts/Layout";
import { SignUp } from "../redux/users/operation";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const SignUpPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [confirmPassword, setConfirmPassword] = useState("");

  const inputUserName = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setUserName(event.target.value);
    },
    [setUserName]
  );

  const inputEmail = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );

  const inputPassword = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setPassword(event.target.value);
    },
    [setPassword]
  );

  const inputConfirmPassword = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setConfirmPassword(event.target.value);
    },
    [setConfirmPassword]
  );

  const logIn = async (e) => {
    e.preventDefault();
    try {
      router.push("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Layout>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <form action="" onSubmit={logIn}>
              <h1 className="mb-8 text-3xl text-center">アカウント登録</h1>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="fullname"
                placeholder="ユーザー名"
                onChange={inputUserName}
              />

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="メールアドレス"
                onChange={inputEmail}
              />

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="パスワード"
                onChange={inputPassword}
              />

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="confirm_password"
                placeholder="パスワード再確認"
                onChange={inputConfirmPassword}
              />
            </form>

            <Link href={"/"}>
              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green text-white bg-green-600 focus:outline-none my-1"
                onClick={() =>
                  dispatch(SignUp(userName, email, password, confirmPassword))
                }
              >
                Create Account
              </button>
            </Link>
          </div>

          <div className="text-grey-dark mt-6 flex">
            <p>すでにアカウントをお持ちの方は</p>
            <Link href="SignInPage">
              <p className="underline text-blue-500">こちら</p>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignUpPage;
