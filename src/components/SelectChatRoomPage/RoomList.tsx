import React from "react";
import { db } from "../../Firebase/firebase";
import Link from "next/link";

type Props = {
  room: {
    id: string;
    name: string;
    uid: string;
  };
  uid: string;
};

const RoomList = (props: Props) => {
  const { room, uid } = props;
  const deleteChatRoom = () => {
    const res = confirm("本当に削除しますか？");
    if (res) {
      db.collection("rooms").doc(room.id).delete();
    }
  };
  return (
    <div className="flex border-t-2 py-4 ">
      <Link href={`/chats/${room.id}`}>
        <div className=" ">
          <div className="pl-4 pt-1  font-semibold">
            <p className="">{room.name}</p>
          </div>
        </div>
      </Link>
      {room.uid === uid && (
        <button
          className="bg-red-400 py-1 text-white font-bold  px-6 rounded ml-auto mr-6"
          onClick={deleteChatRoom}
        >
          削除
        </button>
      )}
    </div>
  );
};

export default RoomList;
