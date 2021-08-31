import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { countCorrectAnswer } from "../redux/action/countAnswer";
import {
  getQuestionDataList,
  getQuestionNumber,
} from "../redux/action/questionList";
import { getCountAnswerSelector } from "../redux/QuestionList/answerSelector";
import { getQuestionDataListSelector } from "../redux/QuestionList/selector";
import { RootState } from "../redux/store";
import Mark from "./components/ResultPage/mark";
import Card from "./layouts/Card";
import Layout from "./layouts/Layout";

const ResultPage = () => {
  const selector = useSelector((state: RootState) => state);
  const questionList = getQuestionDataListSelector(selector);
  const resultAnswer = getCountAnswerSelector(selector);

  // 正解した問題のみの配列
  const correctAnswer = resultAnswer.filter((answer) => answer === true);

  // 正答率計算
  const numberOfCorrectAnswers = correctAnswer.length;
  const correctAnswerRate = Math.floor((numberOfCorrectAnswers / 3) * 100);
  const dispatch = useDispatch();

  const resetAnswer = () => {
    dispatch(getQuestionDataList([]));
    dispatch(getQuestionNumber(0));
    dispatch(countCorrectAnswer([]));
  };

  return (
    <Layout>
      <Card>
        <div className="text-center">
          <p>テスト結果</p>
          <p>
            正答率<span className=" text-3xl">{correctAnswerRate}</span>%
          </p>
          <p>3問中{numberOfCorrectAnswers}問正解</p>

          {resultAnswer.map((answer) => {
            if (answer === true) {
              return "◯";
            }
            return "×";
          })}
          {questionList.map((question) => {
            return (
              <div className=" border-t-2 " key={question.questionID}>
                <div className="px-2 flex">
                  <Mark isCorrect={resultAnswer} />
                  <p className="w-8/12">{question.question}</p>
                  <p className="w-2/12">＋</p>
                </div>
              </div>
            );
          })}
          <Link href={"/"}>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
              onClick={resetAnswer}
            >
              TOPに戻る
            </button>
          </Link>
        </div>
      </Card>
    </Layout>
  );
};

export default ResultPage;
