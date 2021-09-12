import React from "react";

type Props = {
  name: InputName;
};

type InputName = "userName" | "email" | "password" | "confirmPassword";

const InputParts = (props: Props) => {
  const { name } = props;
  const displayInput = () => {
    switch (name) {
      case "userName":
        return (
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="userName"
            placeholder="ユーザー名"
          />
        );

      case "email":
        return (
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="userName"
            placeholder="ユーザー名"
          />
        );
      case "password":
        return (
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="パスワード"
          />
        );
      case "confirmPassword":
        return (
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirmPassword"
            placeholder="パスワード再確認"
          />
        );
    }
  };
  return <>{displayInput()}</>;
};

export default InputParts;
