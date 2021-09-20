import dayjs from "dayjs";
import React from "react";

type Props = {
  post: {
    id: string;
    text: string;
    timestamp: string;
    userName: string;
  };
};

const ChatPosts = (props: Props) => {
  const { post } = props;
  return (
    <div>
      <div key={post.id} className="my-2 pl-2">
        <div className="flex">
          <p className="font-bold">{post.userName}</p>

          <p className="pl-2">
            {dayjs(post.timestamp).format("YYYY/MM/DD HH:mm")}
          </p>
        </div>
        <p className="py-2 px-2 bg-gray-200  inline-block rounded-md rounded-tl-none whitespace-pre-wrap">
          {post.text}
        </p>
      </div>
    </div>
  );
};

export default ChatPosts;
