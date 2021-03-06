import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCheckedAnswerAction,
  getResultAnswerAction,
} from "../../../redux/action/answerAction";
import { getCountAnswerSelector } from "../../../redux/selector/answerSelector";
import {
  getQuestionDataListSelector,
  getQuestionNumberSelector,
} from "../../../redux/selector/questionSelector";
import { RootState } from "../../../redux/store";

type Props = {
  isCorrect: boolean;
};

const LastAnswerCard = (props: Props) => {
  const { isCorrect } = props;
  const dispatch = useDispatch();

  const selector = useSelector((state: RootState) => state);
  const questionIdsList = getCountAnswerSelector(selector);
  const questionDataList = getQuestionDataListSelector(selector);
  const questionNumber = getQuestionNumberSelector(selector);

  const resultCorrectClick = () => {
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
    dispatch(
      getCheckedAnswerAction({ isChecked: false, checkedAnswerString: "" })
    );
  };
  return (
    <Link href={"/question/ResultPage"}>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
        onClick={resultCorrectClick}
      >
        結果を見る
      </button>
    </Link>
  );
};

export default LastAnswerCard;
