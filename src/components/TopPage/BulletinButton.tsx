import React, { useEffect, useState } from "react";
import Link from "next/link";
import Button from "../../parts/Button/Button";
import { getUidSelector } from "../../redux/selector/userSelector";
import { getChatUserNameData } from "../../functions/getChatUserNameData";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const BulletinButton = () => {
  const selector = useSelector((state: RootState) => state);
  const [userName, setUserName] = useState("");
  const isUserName = async () => {
    const uid = await getUidSelector(selector);
    const userData = await getChatUserNameData(uid);
    await setUserName(userData.userName);
  };
  useEffect(() => {
    isUserName();
  }, []);
  return (
    <Link href={userName === "" ? "/chat/InputUserName" : "/chat/SelectChatRoomPage"}>
      <div className="text-center pb-8">
        <Button color={"bg-blue-500"}>掲示板を見てみる</Button>
      </div>
    </Link>
  );
};
export default BulletinButton;
