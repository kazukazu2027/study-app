import React, { useState, useEffect } from "react";
import Layout from "./layouts/Layout";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { getUidSelector } from "../redux/selector/userSelector";
import { getData } from "../functions/getData";
import { InputUserName } from "./components/ChatPage/InputUserName";
import SelectChatRoomPage from "./SelectChatRoomPage";
import {
  chatUserName,
  getChatUserNameAction,
} from "../redux/action/chatAction";
import { Firebase } from "../Firebase/firebase";

type Props = {
  userNameData: chatUserName[];
};

const ChatPage = (props: Props) => {
  const { userNameData } = props;

  const dispatch = useDispatch();
  const uid = Firebase.auth().currentUser?.uid;
  const [isUserName, setIsUserName] = useState<chatUserName[]>([]);

  useEffect(() => {
    (async () => {
      const isUserName = await userNameData.filter((data) => data.id === uid);
      setIsUserName(isUserName);
      dispatch(getChatUserNameAction(isUserName));
    })();
  }, []);
  console.log(isUserName);
  return (
    <div className="relative min-h-screen">
      {isUserName.length > 0 ? <SelectChatRoomPage /> : <InputUserName />}
    </div>
  );
};

export async function getStaticProps() {
  const userNameData = await getData("userName");
  return {
    props: {
      userNameData,
    },
  };
}

export default ChatPage;
