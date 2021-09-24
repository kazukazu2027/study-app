import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../functions/getData";
import { InputUserName } from "./InputUserName";
import SelectChatRoomPage from "./SelectChatRoomPage";
import {
  chatUserName,
  getChatUserNameAction,
} from "../redux/action/chatAction";
import Firebase from "firebase";

type Props = {
  userNameData: chatUserName[];
};

const ChatPage = (props: Props) => {
  const { userNameData } = props;

  const dispatch = useDispatch();
  const [isUserName, setIsUserName] = useState<chatUserName[]>([]);
  const uid = Firebase.auth().currentUser?.uid;

  useEffect(() => {
    (async () => {
      const isUserName = await userNameData.filter((data) => data.uid === uid);
      await setIsUserName(isUserName);
      await dispatch(getChatUserNameAction(isUserName));
    })();
  }, []);
  console.log(userNameData);
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
