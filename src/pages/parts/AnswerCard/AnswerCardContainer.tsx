import React from "react";
import { useSelector } from "react-redux";
import {
  getCheckedAnswerStringSelector,
  getCountAnswerSelector,
} from "../../../redux/selector/answerSelector";
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

  const checkedAnswerString = getCheckedAnswerStringSelector(selector);
  const resultAnswersList = getCountAnswerSelector(selector);
  console.log(resultAnswersList);
  return (
    <>
      <div className={`${color} rounded py-4 w-5/12 m-auto`}>
        <p>{answerResult}</p>
      </div>
      <div className=" font-bold text-2xl py-8 px-2">
        <p className="">{checkedAnswerString}</p>
      </div>

      {/* 最終問題か確認 */}
      {resultAnswersList.length === 2 ? (
        <LastQuestion answerResult={answerResult} />
      ) : (
        <QuestionCard answerResult={answerResult} />
      )}
    </>
  );
};

export default AnswerCardContainer;
