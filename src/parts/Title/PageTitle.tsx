import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const PageTitle = (props: Props) => {
  const { children } = props;
  return <p className="text-xl font-bold">{children}</p>;
};

export default PageTitle;
