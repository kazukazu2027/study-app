import React from "react";
import Link from "next/link";

const HaveAccount = () => {
  return (
    <div className="text-grey-dark flex">
      <p>すでにアカウントをお持ちの方は</p>
      <Link href="SignInPage">
        <p className="underline text-blue-500">こちら</p>
      </Link>
    </div>
  );
};
export default HaveAccount;
