import React, { useEffect, useState } from "react";
import Layout from "./layouts/Layout";
import Question from "./components/QuestionPage/Question";
import questionData from "../../data.json";
import AnswerCard from "./layouts/AnswerCard";
import AnswerCardContainer from "./parts/AnswerCardContainer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

const answer = questionData[0].answerList.filter((list) => list.check === true);

const QuestionPage = () => {

  const checkedAnswerString = useSelector(
    (state: RootState) => state.answer.checkedAnswer.checkedAnswerString
  );

  // 正解かどうか判定
  const isTrue = answer[0].body.indexOf(checkedAnswerString);


  return (
    <Layout>
      <Question />
      <div className={`${checkedAnswerString ? "block" : "hidden"}`}>
        {isTrue === -1 ? (
          <AnswerCard>
            <AnswerCardContainer title="不正解" color={"bg-red-200"} />
          </AnswerCard>
        ) : (
          <AnswerCard>
            <AnswerCardContainer title="正解" color={"bg-green-200"} />
          </AnswerCard>
        )}
      </div>
    </Layout>
  );
};

export default QuestionPage;
