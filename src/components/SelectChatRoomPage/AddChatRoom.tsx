import React, { useState } from "react";
import { useSelector } from "react-redux";
import { addData } from "../../functions/addData";
import { makeRoomId } from "../../functions/makeRoomId";
import Button from "../../parts/Button/Button";
import { getUidSelector } from "../../redux/selector/userSelector";
import { RootState } from "../../redux/store";

const AddChatRoom = () => {
  const selector = useSelector((state: RootState) => state);
  const uid = getUidSelector(selector);
  const [roomName, setRoomName] = useState("");

  const onChangeRoomName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomName(e.target.value);
  };

  const addChatRoom = () => {
    const id = makeRoomId();
    // 部屋の情報をデータベースに追加
    addData("rooms", id, roomName, uid);
    setRoomName("");
  };
  return (
    <>
      <div className="px-3">
        <input
          type="text"
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="userName"
          placeholder="チャットルームを追加する"
          onChange={onChangeRoomName}
          value={roomName}
        />
      </div>
      <Button color="bg-blue-400" onClick={addChatRoom}>
        追加
      </Button>
    </>
  );
};

export default AddChatRoom;
