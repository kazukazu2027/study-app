import React from "react";

type Props = {
  sendMsg: (e: React.FormEvent<HTMLFormElement>) => void;
  onChangeMsg: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  msg: string;
};

const AddChatText = (props: Props) => {
  const { sendMsg, onChangeMsg, msg } = props;
  return (
    <form onSubmit={sendMsg}>
      <div className="p-3 flex justify-between">
        <textarea
          placeholder={"メッセージを送信"}
          className="block border-2 border-green-400 p-3 rounded w-9/12 h-sm"
          onChange={onChangeMsg}
          value={msg}
        />
        <button
          className={`text-white font-bold block rounded px-6 ${
            msg ? "bg-green-400" : "bg-gray-400"
          } `}
          type="submit"
          disabled={!msg}
        >
          送信
        </button>
      </div>
    </form>
  );
};

export default AddChatText;
