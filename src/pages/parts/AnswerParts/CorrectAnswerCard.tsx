import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  countCorrectAnswer,
  getCheckedAnswer,
} from "../../../redux/action/countAnswer";
import { getQuestionNumber } from "../../../redux/action/questionList";
import { getQuestionDataSelector, getQuestionNumberSelector } from "../../../redux/QuestionList/selector";
import { RootState } from "../../../redux/store";

const CorrectAnswerCard = () => {
  const dispatch = useDispatch();

  const selector = useSelector((state: RootState) => state);
  const questionData = getQuestionDataSelector(selector);
  const number = getQuestionNumberSelector(selector);

  const correctQuestionIdsList = useSelector(
    (state: RootState) => state.answer.correctQuestionIds
  );
  const nextQuestionCorrectClick = () => {
    dispatch(
      countCorrectAnswer([
        ...correctQuestionIdsList,
        {
          id: questionData.id,
          question: questionData.question,
          isCorrect: true,
        },
      ])
    );
    dispatch(getQuestionNumber(number + 1));
    dispatch(getCheckedAnswer({ isChecked: false, checkedAnswerString: "" }));
  };
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
      onClick={nextQuestionCorrectClick}
    >
      次の問題
    </button>
  );
};

export default CorrectAnswerCard;
