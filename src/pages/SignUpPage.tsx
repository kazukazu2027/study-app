import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { auth, db } from "../Firebase/firebase";
import Layout from "./layouts/Layout";
import ErrorMessage from "../Firebase/ErrorMassage";
import InputParts from "./parts/Input/InputParts";
import HaveAccount from "./parts/SignLink/HaveAccount";

const SignUpPage = () => {
  const router = useRouter();

  const [error, setError] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const { userName, email, password, confirmPassword } =
      event.target.elements;
    try {
      if (
        userName.value === "" ||
        email.value === "" ||
        password.value === "" ||
        confirmPassword.value === ""
      ) {
        alert("必須項目が未入力です");
        return false;
      }
      if (password.value !== confirmPassword.value) {
        alert("パスワードが一致しません");
        return false;
      }
      await auth
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((result) => {
          const user = result.user;
          if (user) {
            const uid = user.uid;
            const userInitialData = {
              email: email.value,
              uid: uid,
              userName: userName.value,
            };
            db.collection("users").doc(uid).set(userInitialData);
          }
          router.push("/");
        });
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <Layout>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <form action="" onSubmit={handleSubmit}>
              <h1 className="mb-8 text-3xl text-center">アカウント登録</h1>
              <ErrorMessage error={error} />
              <InputParts name={"userName"} />
              <InputParts name={"email"} />
              <InputParts name={"password"} />
              <InputParts name={"confirmPassword"} />
              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green text-white bg-green-600 focus:outline-none my-1"
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
  );
};

export default SignUpPage;
