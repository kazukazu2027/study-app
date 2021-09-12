import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { useDispatch } from "react-redux";
import { auth, db } from "../Firebase/firebase";
import { signInAction } from "../redux/action/usersAction";
import Layout from "./layouts/Layout";
import ErrorMessage from "../Firebase/ErrorMassage";
import InputParts from "./parts/Input/InputParts";
import CreateAccount from "./parts/SignLink/CreateAccount";
import ResetPassword from "./parts/SignLink/ResetPassword";

const SignInPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await auth
        .signInWithEmailAndPassword(email.value, password.value)
        .then((result) => {
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
    } catch (error:any) {
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
              <InputParts name={"email"} />
              <InputParts name={"password"} />

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green text-white bg-green-600 focus:outline-none my-1"
              >
                Sign In
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
  );
};

export default SignInPage;
