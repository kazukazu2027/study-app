import React from "react";
import { LayoutProps } from "./Layout";

const AnswerCard = (props: LayoutProps) => {
  const { children } = props;
  return (
    <div className="border rounded-lg shadow  m-auto mt-14">
      <div className="text-center my-6">{children}</div>
    </div>
  );
};

export default AnswerCard;
