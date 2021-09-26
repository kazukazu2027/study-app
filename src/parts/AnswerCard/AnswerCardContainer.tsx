import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  getAnswerListSelector,
  getCheckedAnswerStringSelector,
  getCountAnswerSelector,
} from "../../redux/selector/answerSelector";
import { getTheNumberOfQuestions } from "../../redux/selector/questionSelector";
import { RootState } from "../../redux/store";
import LastQuestion from "./AnswerParts/LastQuestion";
import QuestionCard from "./AnswerParts/QuestionCard";

interface Props {
  answerResult: string;
  color: string;
}

const AnswerCardContainer = (props: Props) => {
  const { answerResult, color } = props;
  const selector = useSelector((state: RootState) => state);
  const theNumberOfQuestions = getTheNumberOfQuestions(selector);
  const [correctAnswerString, setCorrectAnswerString] = useState("");
  const checkedAnswerString = getCheckedAnswerStringSelector(selector);

  useEffect(() => {
    (async () => {
      const answerList = await getAnswerListSelector(selector);
      // 問題の中から正解の答えを抽出
      const correctAnswerString = await answerList.filter(
        (list) => list.check === true
      )[0].body;
      setCorrectAnswerString(correctAnswerString);
    })();
  }, [checkedAnswerString]);

  const resultAnswersList = getCountAnswerSelector(selector);
  console.log(theNumberOfQuestions)
  console.log(resultAnswersList.length)
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
