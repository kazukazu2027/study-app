import React from "react";
import LastCorrectAnswerCard from "./LastCorrectAnser";
import LastIncorrectAnswerCard from "./LastIncorrectAnswerCard";

type Props = {
  answerResult: string;
};

const LastQuestion = (props: Props) => {
  const { answerResult } = props;
  return answerResult === "正解" ? (
    <LastCorrectAnswerCard />
  ) : (
    <LastIncorrectAnswerCard />
  );
};

export default LastQuestion;
