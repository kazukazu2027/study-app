import { db } from "../Firebase/firebase";
import firebase from "firebase";

export const sendMsgToDatabase = (
  roomName: string,
  msg: string,
  timestamp: firebase.firestore.FieldValue,
  userName: string
) => {
  db.collection("rooms").doc(roomName).collection("messages").add({
    text: msg,
    timestamp: timestamp,
    userName: userName,
  });
};
