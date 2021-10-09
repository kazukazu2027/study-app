import React from "react";
import Link from "next/link";

const ResetPassword = () => {
  return (
    <div className="text-grey-dark flex">
      <p>パスワードを忘れた方は</p>
      <Link href="/auth/ResetPasswordPage">
        <p className="underline text-blue-500">こちら</p>
      </Link>
    </div>
  );
};

export default ResetPassword;
