import React, { useCallback, useState } from "react";
import Layout from "./layouts/Layout";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { auth } from "../Firebase/firebase";
import ErrorMessage from "../Firebase/errorMassage";

const SignInPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await auth.signInWithEmailAndPassword(email.value, password.value);
      router.push("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <Layout>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <form action="" onSubmit={handleSubmit}>
              <h1 className="mb-8 text-3xl text-center">サインイン</h1>

              <ErrorMessage error={error} />
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="メールアドレス"
              />

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="パスワード"
              />

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green text-white bg-green-600 focus:outline-none my-1"
              >
                Sign In
              </button>
            </form>
          </div>

          <div className="text-grey-dark mt-6 flex">
            <p>アカウントをお持ちでない方は</p>
            <Link href="SignUpPage">
              <p className="underline text-blue-500">こちら</p>
            </Link>
          </div>

          <div className="text-grey-dark mt-6 flex">
            <p>パスワードを忘れた方は</p>
            <Link href="ResetPasswordPage">
              <p className="underline text-blue-500">こちら</p>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignInPage;
