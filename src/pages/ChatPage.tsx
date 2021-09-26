import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../functions/getData";
import { InputUserName } from "./InputUserName";
import SelectChatRoomPage from "./SelectChatRoomPage";
import {
  chatUserName,
  getChatUserNameAction,
  isHaveChatUserName,
} from "../redux/action/chatAction";
import Firebase from "firebase";
import { RootState } from "../redux/store";
import { getIsHaveChatUserName } from "../redux/selector/chatSelector";

type Props = {
  userNameData: chatUserName[];
};

const ChatPage = (props: Props) => {
  const { userNameData } = props;
  console.log(userNameData)

  const dispatch = useDispatch();
  const selector = useSelector((state: RootState) => state);
  const isHaveUserName = getIsHaveChatUserName(selector);

  const uid = Firebase.auth().currentUser?.uid;

  useEffect(() => {
    (async () => {
      const isUserName = await userNameData.filter((data) => data.uid === uid);
      await dispatch(isHaveChatUserName(isUserName.length > 0));
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
  const userNameData = await getData("userName");

  return {
    props: {
      userNameData,
    },
  };
}

export default ChatPage;
