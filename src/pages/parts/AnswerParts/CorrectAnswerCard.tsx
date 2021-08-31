import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  countCorrectAnswer,
  getCheckedAnswer,
} from "../../../redux/action/countAnswer";
import { getQuestionNumber } from "../../../redux/action/questionList";
import { getCountAnswerSelector } from "../../../redux/QuestionList/answerSelector";
import { getQuestionNumberSelector } from "../../../redux/QuestionList/selector";
import { RootState } from "../../../redux/store";

const CorrectAnswerCard = () => {
  const dispatch = useDispatch();

  const selector = useSelector((state: RootState) => state);
  const number = getQuestionNumberSelector(selector);
  const questionIdsList = getCountAnswerSelector(selector);

  const nextQuestionCorrectClick = () => {
    dispatch(countCorrectAnswer([...questionIdsList, true]));
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
