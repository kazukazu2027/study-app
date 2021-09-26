import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  getAnswerListSelector,
  getCheckedAnswerStringSelector,
} from "../../../redux/selector/answerSelector";
import { RootState } from "../../../redux/store";
import AnswerCard from "../../layouts/AnswerCard";
import AnswerCardContainer from "../../parts/AnswerCard/AnswerCardContainer";

const Answer = () => {
  const selector = useSelector((state: RootState) => state);
  const checkedAnswerString = getCheckedAnswerStringSelector(selector);
  const answerList = getAnswerListSelector(selector);

  console.log(answerList)
  // 問題の中から正解の答えを抽出
  const correctAnswerString = answerList.filter(
    (list) => list.check === true
  )[0].body;

  return (
    <div className={`${checkedAnswerString ? "block" : "hidden"}`}>
      {correctAnswerString === checkedAnswerString ? (
        <AnswerCard>
          <AnswerCardContainer answerResult="正解" color={"bg-green-200"} />
        </AnswerCard>
      ) : (
        <AnswerCard>
          <AnswerCardContainer answerResult="不正解" color={"bg-red-200"} />
        </AnswerCard>
      )}
    </div>
  );
};

export default Answer;
