type Props = {
  error: string;
};

const ErrorMessage = (props: Props) => {
  const { error } = props;
  const displayJapaneseErrorMessage = () => {
    switch (error) {
      case "There is no user record corresponding to this identifier. The user may have been deleted.":
        return <p>このユーザー名は存在しません。</p>;
      case "The email address is badly formatted.":
        return <p>メールアドレスの形式が正しくありません。</p>;
      case "The password is invalid or the user does not have a password.":
        return <p>パスワードが間違っています。</p>;
    }
  };
  return <>{displayJapaneseErrorMessage()}</>;
};

export default ErrorMessage;
