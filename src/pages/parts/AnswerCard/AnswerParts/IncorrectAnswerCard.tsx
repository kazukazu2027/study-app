import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  countCorrectAnswer,
  getCheckedAnswer,
} from "../../../../redux/action/answerAction";
import { getQuestionNumber } from "../../../../redux/action/questionAction";
import { getCountAnswerSelector } from "../../../../redux/selector/answerSelector";
import { getQuestionNumberSelector } from "../../../../redux/selector/questionSelector";
import { RootState } from "../../../../redux/store";

const IncorrectAnswerCard = () => {
  const dispatch = useDispatch();

  const selector = useSelector((state: RootState) => state);
  const questionNumber = getQuestionNumberSelector(selector);
  const questionIdsList = getCountAnswerSelector(selector);

  const nextQuestionIncorrectClick = () => {
    dispatch(countCorrectAnswer([...questionIdsList, false]));
    dispatch(getQuestionNumber(questionNumber + 1));
    dispatch(getCheckedAnswer({ isChecked: false, checkedAnswerString: "" }));
  };
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
      onClick={nextQuestionIncorrectClick}
    >
      次の問題
    </button>
  );
};

export default IncorrectAnswerCard;
