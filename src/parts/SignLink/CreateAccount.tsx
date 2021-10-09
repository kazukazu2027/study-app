import React from "react";
import Link from "next/link";

const CreateAccount = () => {
  return (
    <div className="text-grey-dark flex">
      <p>アカウントをお持ちでない方は</p>
      <Link href="/auth/SignUpPage">
        <p className="underline text-blue-500">こちら</p>
      </Link>
    </div>
  );
};
export default CreateAccount;
