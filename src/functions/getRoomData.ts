import { db } from "../Firebase/firebase";
import firebase from "firebase";

export const getRoomData = async (
  collectionName: string,
  id: string
): Promise<firebase.firestore.DocumentData[]> => {
  const answerDataList: firebase.firestore.DocumentData = [];
  await db
    .collection(collectionName)
    .where("id", "==", `${id}`)
    .get()
    .then((snapShots) => {
      snapShots.forEach((doc) => {
        answerDataList.push(doc.data());
      });
    });
  return answerDataList[0];
};
