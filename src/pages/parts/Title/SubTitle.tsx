import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const SubTitle = (props: Props) => {
  const { children } = props;
  return <p className=" font-semibold text-xl">{children}</p>;
};

export default SubTitle;
