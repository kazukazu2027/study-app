import { db } from "../Firebase/firebase";
import firebase from "firebase";

export const getData = async (
  collectionName: string
): Promise<firebase.firestore.DocumentData[]> => {
  const answerDataList: firebase.firestore.DocumentData[] = [];
  await db
    .collection(collectionName)
    .get()
    .then((snapShots) => {
      snapShots.forEach((doc) => {
        answerDataList.push(doc.data());
      });
    });
  console.log(answerDataList);
  return answerDataList;
};
