import React from "react";
import CorrectAnswerCard from "./CorrectAnswerCard";
import IncorrectAnswerCard from "./IncorrectAnswerCard";

type Props = {
  answerResult: string;
};

const QuestionCard = (props: Props) => {
  const { answerResult } = props;
  return answerResult === "正解" ? (
    <CorrectAnswerCard />
  ) : (
    <IncorrectAnswerCard />
  );
};

export default QuestionCard;
