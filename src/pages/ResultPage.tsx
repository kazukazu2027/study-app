import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countCorrectAnswer } from "../redux/action/answerAction";
import {
  getQuestionDataList,
  getQuestionNumber,
} from "../redux/action/questionAction";
import { getCountAnswerSelector } from "../redux/selector/answerSelector";
import { getQuestionDataListSelector } from "../redux/selector/questionSelector";
import { RootState } from "../redux/store";
import AnswerList from "./components/ResultPage/AnswerList";
import Card from "./layouts/Card";
import Layout from "./layouts/Layout";
import Button from "./parts/Button/Button";
import TitleInCard from "./parts/Card/TitleInCard";

const ResultPage = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state: RootState) => state);
  const questionDataList = getQuestionDataListSelector(selector);
  const resultAnswer = getCountAnswerSelector(selector);

  // 正解した問題のみの配列
  const correctAnswer = resultAnswer.filter(
    (answer) => answer.isCorrect === true
  );

  // 正答率計算
  const numberOfCorrectAnswers = correctAnswer.length;
  const correctAnswerRate = Math.floor((numberOfCorrectAnswers / 3) * 100);

  const resetAnswer = () => {
    dispatch(getQuestionDataList([]));
    dispatch(getQuestionNumber(0));
    dispatch(countCorrectAnswer([]));
  };

  return (
    <Layout>
      <div className="mt-10">
        <Card>
          <div className="text-center">
            <div className="py-2">
              <TitleInCard>テスト結果</TitleInCard>
            </div>
            <div className="pb-2">
              <p>
                正答率<span className=" text-3xl">{correctAnswerRate}</span>%
              </p>
            </div>
            <div className="pb-4">
              <p>
                {questionDataList.length}問中{numberOfCorrectAnswers}問正解
              </p>
            </div>
            {resultAnswer.map((question) => {
              return (
                <div className="text-left" key={question.question}>
                  <AnswerList question={question} />
                </div>
              );
            })}
            <Link href={"/"}>
              <button onClick={resetAnswer} className="py-8">
                <Button color={"bg-blue-500"}>TOPに戻る</Button>
              </button>
            </Link>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default ResultPage;
