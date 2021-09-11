import React, { useState } from "react";
import Link from "next/link";
import { auth } from "../Firebase/firebase";
import Layout from "./layouts/Layout";
import ErrorMessage from "../Firebase/ErrorMassage";

const ResetPasswordPage = () => {
  const [error, setError] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const { email } = event.target.elements;
    try {
      if (email.value === "") {
        alert("必須項目が未入力です");
        return false;
      }
      await auth.sendPasswordResetEmail(email.value).then(() => {
        alert("入力されたアドレスにパスワードリセット用のメールを送りました。");
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Layout>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <form action="" onSubmit={handleSubmit}>
              <h1 className="mb-8 text-2xl text-center">
                パスワードをリセット
              </h1>
              <ErrorMessage error={error} />

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="メールアドレス"
              />

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green text-white bg-green-600 focus:outline-none my-1"
              >
                Reset Password
              </button>
            </form>
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
