import { db } from "../Firebase/firebase";
import firebase from "firebase";

export const addData = (
  collectionName: string,
  id: string,
  roomName: string,
  uid: string
) => {
  db.collection(collectionName).doc(id).set({
    roomName: roomName,
    id: id,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    uid: uid,
  });
};
