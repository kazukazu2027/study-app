import React from "react";
import Layout from "./layouts/Layout";
import Question from "./components/QuestionPage/Question";
import AnswerCard from "./layouts/AnswerCard";
import AnswerCardContainer from "./parts/AnswerCardContainer";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { getCheckedAnswerStringSelector } from "../redux/QuestionList/answerSelector";
import { getAnswerListSelector } from "../redux/QuestionList/selector";

const QuestionPage = () => {
  const selector = useSelector((state: RootState) => state);
  const checkedAnswerString = getCheckedAnswerStringSelector(selector);
  const answerList = getAnswerListSelector(selector);

  console.log(answerList);

  // 問題の中から正解の答えを抽出
  const answer = answerList && answerList.filter((list) => list.check === true);
  console.log(answer);
  // 正解かどうか判定
  const isTrue = answer[0].body && answer[0].body.indexOf(checkedAnswerString);

  return (
    <Layout>
      <Question />
      <div className={`${checkedAnswerString ? "block" : "hidden"}`}>
        {isTrue === -1 ? (
          <AnswerCard>
            <AnswerCardContainer answerResult="不正解" color={"bg-red-200"} />
          </AnswerCard>
        ) : (
          <AnswerCard>
            <AnswerCardContainer answerResult="正解" color={"bg-green-200"} />
          </AnswerCard>
        )}
      </div>
    </Layout>
  );
};

export default QuestionPage;
