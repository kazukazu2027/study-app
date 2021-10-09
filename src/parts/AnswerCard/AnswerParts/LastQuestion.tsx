import React from "react";
import LastAnswerCard from "./LastCorrectAnser";

type Props = {
  answerResult: string;
};

const LastQuestion = (props: Props) => {
  const { answerResult } = props;
  return answerResult === "正解" ? (
    <LastAnswerCard isCorrect={true} />
  ) : (
    <LastAnswerCard isCorrect={false} />
  );
};

export default LastQuestion;
