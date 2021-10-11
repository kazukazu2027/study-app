import React from "react";
import { useSelector } from "react-redux";
import { getCountAnswerSelector } from "../../redux/selector/answerSelector";
import { getTheNumberOfQuestions } from "../../redux/selector/questionSelector";
import { RootState } from "../../redux/store";
import LastQuestion from "./AnswerParts/LastQuestion";
import QuestionCard from "./AnswerParts/QuestionCard";

interface Props {
  answerResult: string;
  color: string;
  correctAnswerString: string;
}

const AnswerCardContainer = (props: Props) => {
  const { answerResult, color, correctAnswerString } = props;
  const selector = useSelector((state: RootState) => state);
  const theNumberOfQuestions = getTheNumberOfQuestions(selector);
  const resultAnswersList = getCountAnswerSelector(selector);

  return (
    <>
      <div className={`${color} rounded py-4 w-5/12 m-auto`}>
        <p>{answerResult}</p>
      </div>
      <div className=" font-bold text-2xl py-8 px-2">
        <p className="">{correctAnswerString}</p>
      </div>

      {/* 最終問題か確認 */}
      {resultAnswersList.length === theNumberOfQuestions - 1 ? (
        <LastQuestion answerResult={answerResult} />
      ) : (
        <QuestionCard answerResult={answerResult} />
      )}
    </>
  );
};

export default AnswerCardContainer;
