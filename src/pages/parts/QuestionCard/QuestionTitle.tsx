import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const QuestionTitle = (props: Props) => {
  const { children } = props;
  return <p className="font-bold text-2xl ">{children}</p>;
};

export default QuestionTitle;
