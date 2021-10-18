import React from "react";
import { useDispatch } from "react-redux";
import {
  signInConfirmPassword,
  signInEmail,
  signInPassword,
} from "../../redux/action/usersAction";

type Props = {
  name: InputName;
};

type InputName = "email" | "password" | "confirmPassword";

const InputParts = (props: Props) => {
  const dispatch = useDispatch();
  const { name } = props;
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(signInEmail(e.target.value));
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(signInPassword(e.target.value));
  };
  const onChangeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(signInConfirmPassword(e.target.value));
  };
  const displayInput = () => {
    switch (name) {
      case "email":
        return (
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="userName"
            placeholder="メールアドレス"
            onChange={onChangeEmail}
          />
        );
      case "password":
        return (
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="パスワード"
            onChange={onChangePassword}
          />
        );
      case "confirmPassword":
        return (
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirmPassword"
            placeholder="パスワード再確認"
            onChange={onChangeConfirmPassword}
          />
        );
    }
  };
  return <>{displayInput()}</>;
};

export default InputParts;
