import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const RoomTitle = (props: Props) => {
  const { children } = props;
  return <h2 className="py-3 font-bold pl-3">{children}</h2>;
};

export default RoomTitle;
