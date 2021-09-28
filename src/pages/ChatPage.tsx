import React, { useEffect, useState } from "react";
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
  const [isHaveUserName, setIsHaveUserName] = useState<boolean>();
  const dispatch = useDispatch();

  const uid = Firebase.auth().currentUser?.uid;

  useEffect(() => {
    (async () => {
      const isUserName = await userNameData.filter((data) => data.uid === uid);
      const isHaveUserName = isUserName.filter((user) => user.userName);
      await setIsHaveUserName(isHaveUserName.length > 0);
      await dispatch(getChatUserNameAction(isUserName));
    })();
  }, []);
  return (
    <div className="relative min-h-screen">
      {isHaveUserName ? <SelectChatRoomPage /> : <InputUserName />}
    </div>
  );
};

export async function getStaticProps() {
  const userNameData = await getData("users");

  return {
    props: {
      userNameData,
    },
  };
}

export default ChatPage;
