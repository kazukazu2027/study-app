import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const QuestionNumber = (props: Props) => {
  const { children } = props;
  return <p>{children}</p>;
};

export default QuestionNumber;
