import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const SubTitle = (props: Props) => {
  const { children } = props;
  return <p className="text-md">{children}</p>;
};

export default SubTitle;