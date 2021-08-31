import React from "react";
import { auth, Firebase } from "../../lib/firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebaseui from "firebaseui";
import Link from "next/link";

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/",
  signInOptions: [
    Firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    Firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    Firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    Firebase.auth.GithubAuthProvider.PROVIDER_ID,
    Firebase.auth.EmailAuthProvider.PROVIDER_ID,
    Firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
  ],
};

const SignInScreen = () => {
  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={Firebase.auth()} />
    </div>
  );
};
export default SignInScreen;
