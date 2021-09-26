import React from "react";
import { useSelector } from "react-redux";
import {
  getAnswerListSelector,
  getCountAnswerSelector,
} from "../../../redux/selector/answerSelector";
import { getTheNumberOfQuestions } from "../../../redux/selector/questionSelector";
import { RootState } from "../../../redux/store";
import LastQuestion from "./AnswerParts/LastQuestion";
import QuestionCard from "./AnswerParts/QuestionCard";

interface Props {
  answerResult: string;
  color: string;
}

const AnswerCardContainer = (props: Props) => {
  const { answerResult, color } = props;
  const selector = useSelector((state: RootState) => state);
  const answerList = getAnswerListSelector(selector);
  const theNumberOfQuestions = getTheNumberOfQuestions(selector);
  // const correctAnswerString = answerList.filter(
  //   (list) => list.check === true
  // )[0].body;

  const resultAnswersList = getCountAnswerSelector(selector);
  return (
    <>
      <div className={`${color} rounded py-4 w-5/12 m-auto`}>
        <p>{answerResult}</p>
      </div>
      <div className=" font-bold text-2xl py-8 px-2">
        <p className="">a</p>
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
