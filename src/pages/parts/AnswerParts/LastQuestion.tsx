import React from "react";
import LastCorrectAnswerCard from "./LastCorrectAnser";
import LastIncorrectAnswerCard from "./LastIncorrectAnswerCard";

type Props = {
  title: string;
};

const LastQuestion = (props: Props) => {
  const { title } = props;
  return title === "正解" ? (
    <LastCorrectAnswerCard />
  ) : (
    <LastIncorrectAnswerCard />
  );
};

export default LastQuestion;
