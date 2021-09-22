type Props = {
  error: string;
};

const ErrorMessage = (props: Props) => {
  const { error } = props;
  const displayJapaneseErrorMessage = () => {
    switch (error) {
      case "There is no user record corresponding to this identifier. The user may have been deleted.":
        return (
          <p className="text-red-500 font-semibold pb-4">
            このユーザー名は存在しません。
          </p>
        );
      case "The email address is badly formatted.":
        return (
          <p className="text-red-500 font-semibold pb-4">
            メールアドレスの形式が正しくありません。
          </p>
        );
      case "The password is invalid or the user does not have a password.":
        return (
          <p className="text-red-500 font-semibold pb-4">
            パスワードが間違っています。
          </p>
        );
      case "The email address is already in use by another account.":
        return (
          <p className="text-red-500 font-semibold pb-4">
            このメールアドレスは既に使用されています。
          </p>
        );
      case "Password should be at least 6 characters":
        return (
          <p className="text-red-500 font-semibold pb-4">
            パスワードは６文字以上で設定してください。
          </p>
        );
    }
  };
  return <>{displayJapaneseErrorMessage()}</>;
};

export default ErrorMessage;
