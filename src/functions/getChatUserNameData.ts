import { db } from "../Firebase/firebase";
import firebase from "firebase";

type userData = {
  email: string;
  uid: string;
  userName: string;
};

export const getChatUserNameData = async (uid: string): Promise<userData> => {
  const answerDataList: firebase.firestore.DocumentData = [];
  await db
    .collection("users")
    .where("uid", "==", `${uid}`)
    .get()
    .then((snapShots) => {
      snapShots.forEach((doc) => {
        answerDataList.push(doc.data());
      });
    });
  return answerDataList[0];
};
