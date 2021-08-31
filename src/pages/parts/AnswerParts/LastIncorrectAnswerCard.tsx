import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  countCorrectAnswer,
  getCheckedAnswer,
} from "../../../redux/action/countAnswer";
import { getCountAnswerSelector } from "../../../redux/QuestionList/answerSelector";
import { getQuestionDataSelector } from "../../../redux/QuestionList/selector";
import { RootState } from "../../../redux/store";

const LastIncorrectAnswerCard = () => {
  const dispatch = useDispatch();

  const selector = useSelector((state: RootState) => state);
  const questionData = getQuestionDataSelector(selector);
  const questionIdsList = getCountAnswerSelector(selector);

  const resultIncorrectClick = () => {
    dispatch(countCorrectAnswer([...questionIdsList, false]));
    dispatch(getCheckedAnswer({ isChecked: false, checkedAnswerString: "" }));
  };
  return (
    <Link href={"ResultPage"}>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
        onClick={resultIncorrectClick}
      >
        結果を見る
      </button>
    </Link>
  );
};

export default LastIncorrectAnswerCard;
