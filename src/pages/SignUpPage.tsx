import React, { useState } from "react";
import { useRouter } from "next/dist/client/router";
import { auth, db } from "../Firebase/firebase";
import ErrorMessage from "../Firebase/ErrorMassage";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  getConfirmPasswordSelector,
  getEmailSelector,
  getPasswordSelector,
  getUserNameSelector,
} from "../redux/selector/userSelector";
import Layout from "../layouts/Layout";
import InputParts from "../parts/Input/InputParts";
import HaveAccount from "../parts/SignLink/HaveAccount";

const SignUpPage = () => {
  const router = useRouter();
  const selector = useSelector((state: RootState) => state);
  const userName = getUserNameSelector(selector);
  const email = getEmailSelector(selector);
  const password = getPasswordSelector(selector);
  const confirmPassword = getConfirmPasswordSelector(selector);

  const [error, setError] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      if (email === "" || password === "" || confirmPassword === "") {
        alert("必須項目が未入力です");
        return false;
      }
      if (password !== confirmPassword) {
        alert("パスワードが一致しません");
        return false;
      }
      await auth
        .createUserWithEmailAndPassword(email, password)
        .then((result) => {
          const user = result.user;
          if (user) {
            const uid = user.uid;
            const userInitialData = {
              email: email,
              uid: uid,
            };
            db.collection("users").doc(uid).set(userInitialData);
          }
          router.push("/SignInPage");
        });
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className=" min-h-screen">
      <Layout>
        <div className="bg-grey-lighter pt-24">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white text-center px-6 py-8 rounded shadow-md text-black w-full">
              <form action="" onSubmit={handleSubmit}>
                <h1 className="mb-5 text-3xl text-center">アカウント登録</h1>
                <ErrorMessage error={error} />
                <InputParts name={"email"} />
                <InputParts name={"password"} />
                <InputParts name={"confirmPassword"} />
                <button
                  type="submit"
                  className="px-4 py-3 rounded bg-green text-white bg-blue-400 focus:outline-none my-1"
                >
                  アカウントを登録する
                </button>
              </form>
            </div>

            <div className=" mt-6 ">
              <HaveAccount />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default SignUpPage;
