import React, { useState } from "react";
import { useRouter } from "next/dist/client/router";
import { useDispatch, useSelector } from "react-redux";
import { auth, db } from "../../Firebase/firebase";
import { signInAction } from "../../redux/action/usersAction";
import ErrorMessage from "../../Firebase/ErrorMassage";
import { RootState } from "../../redux/store";
import {
  getEmailSelector,
  getPasswordSelector,
} from "../../redux/selector/userSelector";
import InputParts from "../../parts/Input/InputParts";
import Layout from "../../layouts/Layout";
import CreateAccount from "../../parts/SignLink/CreateAccount";
import ResetPassword from "../../parts/SignLink/ResetPassword";

const SignInPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const selector = useSelector((state: RootState) => state);
  const email = getEmailSelector(selector);
  const password = getPasswordSelector(selector);

  const [error, setError] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password).then((result) => {
        const user = result.user;
        if (user) {
          const uid = user.uid;
          db.collection("users")
            .doc(uid)
            .get()
            .then((snapshot) => {
              const data = snapshot.data();
              data &&
                dispatch(
                  signInAction({
                    isSignedIn: true,
                    uid: uid,
                    userName: data.userName,
                  })
                );
              router.push("/");
            });
        }
      });
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen">
      <Layout>
        <div className="bg-grey-lighter mt-24">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 text-center rounded shadow-md text-black w-full">
              <form action="" onSubmit={handleSubmit}>
                <h1 className="mb-5 text-3xl text-center">サインイン</h1>
                <ErrorMessage error={error} />
                <InputParts name={"email"} />
                <InputParts name={"password"} />
                <button
                  type="submit"
                  className="px-4 py-3 rounded bg-green text-white bg-blue-400 focus:outline-none my-1"
                >
                  サインインする
                </button>
              </form>
            </div>

            <div className="mt-6">
              <CreateAccount />
            </div>

            <div className="mt-6">
              <ResetPassword />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default SignInPage;
