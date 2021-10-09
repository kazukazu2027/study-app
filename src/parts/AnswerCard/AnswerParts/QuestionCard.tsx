import React from "react";
import AnswerCard from "./AnswerCard";

type Props = {
  answerResult: string;
};

const QuestionCard = (props: Props) => {
  const { answerResult } = props;
  return answerResult === "正解" ? (
    <AnswerCard isCorrect={true} />
  ) : (
    <AnswerCard isCorrect={false} />
  );
};

export default QuestionCard;
