import React, { useState } from "react";
import { auth } from "../../Firebase/firebase";
import ErrorMessage from "../../Firebase/ErrorMassage";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getEmailSelector } from "../../redux/selector/userSelector";
import Layout from "../../layouts/Layout";
import InputParts from "../../parts/Input/InputParts";
import CreateAccount from "../../parts/SignLink/CreateAccount";
import HaveAccount from "../../parts/SignLink/HaveAccount";
import { useRouter } from "next/dist/client/router";

const ResetPasswordPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const selector = useSelector((state: RootState) => state);
  const email = getEmailSelector(selector);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (email === "") {
        alert("必須項目が未入力です");
        return false;
      }
      await auth.sendPasswordResetEmail(email).then(() => {
        alert("入力されたアドレスにパスワードリセット用のメールを送りました。");
      });
      router.push("/auth/SignInPage");
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen">
      <Layout>
        <div className="bg-grey-lighter pt-40">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded text-center shadow-md text-black w-full">
              <form action="" onSubmit={handleSubmit}>
                <h1 className="mb-5 text-2xl text-center">
                  パスワードをリセット
                </h1>
                <ErrorMessage error={error} />
                <InputParts name={"email"} />
                <button
                  type="submit"
                  className=" text-center py-3 px-4 rounded bg-green text-white bg-blue-400 focus:outline-none my-1"
                >
                  リセットする
                </button>
              </form>
            </div>

            <div className="mt-6">
              <CreateAccount />
            </div>

            <div className="mt-6">
              <HaveAccount />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ResetPasswordPage;
