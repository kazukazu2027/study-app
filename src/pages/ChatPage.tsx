import React, { useState, useEffect } from "react";
import Layout from "./layouts/Layout";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { getUidSelector } from "../redux/selector/userSelector";
import { getData } from "../functions/getData";
import { InputUserName } from "./components/ChatPage/InputUserName";
import SelectChatRoomPage from "./SelectChatRoomPage";
import { getChatUserNameAction } from "../redux/action/chatAction";

type Props = {
  data: firebase.firestore.DocumentData[];
};

const ChatPage = (props: Props) => {
  const { data } = props;
  const dispatch = useDispatch();
  const selector = useSelector((state: RootState) => state);
  const uid = getUidSelector(selector);
  const [isUserName, setIsUserName] = useState<
    firebase.firestore.DocumentData[]
  >([]);

  useEffect(() => {
    (async () => {
      const isUserName = await data.filter((data) => data.uid === uid);
      setIsUserName(isUserName);
      dispatch(getChatUserNameAction(isUserName));
    })();
  }, []);
  console.log(isUserName);
  return (
    <div className="relative min-h-screen">
      <Layout>
        {isUserName.length > 0 ? <SelectChatRoomPage /> : <InputUserName />}
      </Layout>
    </div>
  );
};

export async function getStaticProps() {
  const data = await getData("userName");
  return {
    props: {
      data,
    },
  };
}

export default ChatPage;
