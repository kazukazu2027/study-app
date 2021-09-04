import { auth, db } from "../../Firebase/firebase";
import { signInAction } from "./usersAction";

export const SignIn = (email: string, password: string) => {
  return async (dispatch: any) => {
    if (email === "" || password === "") {
      alert("必須項目が未入力です");
      return false;
    }
    auth.signInWithEmailAndPassword(email, password).then((result) => {
      const user = result.user;
      if (user) {
        const uid = user.uid;
        db.collection("users")
          .doc(uid)
          .get()
          .then((snapShot) => {
            const data = snapShot.data();
            data &&
              dispatch(
                signInAction({
                  isSignedIn: true,
                  uid: uid,
                  userName: data.userName,
                })
              );
          });
      }
      
    });
  };
};

export const SignUp = (
  userName: string,
  email: string,
  password: string,
  confirmPassword: string
) => {
  return async () => {
    if (
      userName === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("必須項目が未入力です");
      return false;
    }
    if (password !== confirmPassword) {
      alert(" パスワードが一致しません");
      return false;
    }
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          const uid = user.uid;
          const userInitialData = {
            email: email,
            uid: uid,
            userName: userName,
          };
          db.collection("users").doc(uid).set(userInitialData);
        }
      });
  };
};

export const ResetPassword = (email:string) => {
  return async (dispatch:any) => {
    if (email === "") {
      alert("必須項目が未入力です");
      return false;
    } else {
      auth.sendPasswordResetEmail(email).then(() => {
        alert("入力されたアドレスにパスワードリセット用のメールを送りました。");
      }).catch(() => {
        alert('パスワードリセットに失敗しました。')
      });
    }
  };
};
