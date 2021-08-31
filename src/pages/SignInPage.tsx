import React, { useCallback, useState } from "react";
import Layout from "./layouts/Layout";
import { SignIn } from "../redux/users/operation";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { RootState } from "../redux/store";

const SignInPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const signIn = async (e) => {
    e.preventDefault();
    try {
      router.push("/");
    } catch (err) {
      alert(err.message);
    }
  };
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

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

  return (
    <Layout>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <form action="" onSubmit={signIn}>
              <h1 className="mb-8 text-3xl text-center">サインイン</h1>

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

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green text-white bg-green-600 focus:outline-none my-1"
                onClick={() => dispatch(SignIn(email, password))}
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
