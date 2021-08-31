import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import Layout from "./layouts/Layout";
import { ResetPassword } from "../redux/users/operation";

const ResetPasswordPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const inputEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );

  return (
    <Layout>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-2xl text-center">パスワードをリセット</h1>

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="メールアドレス"
              onChange={inputEmail}
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green text-white bg-green-600 focus:outline-none my-1"
              onClick={() => dispatch(ResetPassword(email))}
            >
              Reset Password
            </button>
          </div>

          <div className="text-grey-dark mt-6 flex">
            <p>アカウントをお作りする方は</p>
            <Link href="SignUpPage">
              <p className="underline text-blue-500">こちら</p>
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

export default ResetPasswordPage;
