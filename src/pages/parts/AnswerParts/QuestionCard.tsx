import React from "react";
import CorrectAnswerCard from "./CorrectAnswerCard";
import IncorrectAnswerCard from "./IncorrectAnswerCard";

type Props = {
  title: string;
};

const QuestionCard = (props: Props) => {
  const { title } = props;
  return title === "正解" ? (
    <>
      <CorrectAnswerCard /> 
    </>
  ) : (
    <IncorrectAnswerCard />
  );
};

export default QuestionCard;
