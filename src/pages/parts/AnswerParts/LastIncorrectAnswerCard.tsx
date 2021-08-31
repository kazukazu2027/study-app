import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  countCorrectAnswer,
  getCheckedAnswer,
} from "../../../redux/action/countAnswer";
import { getQuestionDataSelector } from "../../../redux/QuestionList/selector";
import { RootState } from "../../../redux/store";

const LastIncorrectAnswerCard = () => {
  const dispatch = useDispatch();

  const selector = useSelector((state: RootState) => state);
  const questionData = getQuestionDataSelector(selector);
  const correctQuestionIdsList = useSelector(
    (state: RootState) => state.answer.correctQuestionIds
  );
  const resultIncorrectClick = () => {
    dispatch(
      countCorrectAnswer([
        ...correctQuestionIdsList,
        {
          id: questionData.id,
          question: questionData.question,
          isCorrect: false,
        },
      ])
    );
    dispatch(getCheckedAnswer({ isChecked: false, checkedAnswerString: "" }));
  };
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
      onClick={resultIncorrectClick}
    >
      <Link href={"ResultPage"}>結果を見る</Link>
    </button>
  );
};

export default LastIncorrectAnswerCard;
