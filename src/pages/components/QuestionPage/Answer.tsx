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
  const [correctAnswerString, setCorrectAnswerString] = useState("");

  // useEffect(() => {
  //   (async () => {
  //     const answerList = await getAnswerListSelector(selector);
  //     // 問題の中から正解の答えを抽出
  //     const correctAnswerString = await answerList.filter(
  //       (list) => list.check === true
  //     )[0].body;
  //     setCorrectAnswerString(correctAnswerString);
  //   })();
  // }, [checkedAnswerString]);

  return (
    <div className={`${checkedAnswerString ? "block" : "hidden"}`}>
      {'a' === checkedAnswerString ? (
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
