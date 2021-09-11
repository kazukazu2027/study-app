import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  countCorrectAnswer,
  getCheckedAnswer,
} from "../../../../redux/action/countAnswer";
import { getCountAnswerSelector } from "../../../../redux/QuestionList/answerSelector";
import { RootState } from "../../../../redux/store";

const LastCorrectAnswerCard = () => {
  const dispatch = useDispatch();

  const selector = useSelector((state: RootState) => state);
  const questionIdsList = getCountAnswerSelector(selector);
  const resultCorrectClick = () => {
    dispatch(countCorrectAnswer([...questionIdsList, true]));
    dispatch(getCheckedAnswer({ isChecked: false, checkedAnswerString: "" }));
  };
  return (
    <Link href={"ResultPage"}>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
        onClick={resultCorrectClick}
      >
        結果を見る
      </button>
    </Link>
  );
};

export default LastCorrectAnswerCard;
