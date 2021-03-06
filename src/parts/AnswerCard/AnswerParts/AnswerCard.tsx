import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCheckedAnswerAction,
  getResultAnswerAction,
} from "../../../redux/action/answerAction";
import { getQuestionNumber } from "../../../redux/action/questionAction";
import { getCountAnswerSelector } from "../../../redux/selector/answerSelector";
import {
  getQuestionDataListSelector,
  getQuestionNumberSelector,
} from "../../../redux/selector/questionSelector";
import { RootState } from "../../../redux/store";

type Props = {
  isCorrect: boolean;
};

const AnswerCard = (props: Props) => {
  const { isCorrect } = props;
  const dispatch = useDispatch();

  const selector = useSelector((state: RootState) => state);
  const questionNumber = getQuestionNumberSelector(selector);
  const questionIdsList = getCountAnswerSelector(selector);
  const questionDataList = getQuestionDataListSelector(selector);

  const nextQuestionCorrectClick = () => {
    dispatch(
      getResultAnswerAction([
        ...questionIdsList,
        {
          isCorrect: isCorrect,
          question: questionDataList[questionNumber].question,
          explanation: questionDataList[questionNumber].explanation,
          id: questionDataList[questionNumber].questionID,
        },
      ])
    );
    dispatch(getQuestionNumber(questionNumber + 1));
    dispatch(
      getCheckedAnswerAction({ isChecked: false, checkedAnswerString: "" })
    );
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

export default AnswerCard;
