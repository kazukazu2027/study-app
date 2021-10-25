import React, { useState } from "react";
import Layout from "../layouts/Layout";

import { useDispatch } from "react-redux";
import {
  getQuestionNumber,
  getSliceQuestionDataList,
  getTheNumberOfQuestions,
} from "../redux/action/questionAction";
import { getResultAnswerAction } from "../redux/action/answerAction";
import { questionData } from "../types/questionTypes";
import QuestionCard from "../parts/Card/QuestionCard";

type Props = {
  shuffleQuestionList: questionData[];
};

const QuestionExplanationPageTemplate = (props: Props) => {
  const { shuffleQuestionList } = props;

  const dispatch = useDispatch();
  const [choice, setChoice] = useState(false);

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(getTheNumberOfQuestions(Number(e.target.value)));
    dispatch(getQuestionNumber(0));
    dispatch(getResultAnswerAction([]));
    setChoice(true);
    const sliceQuestionList = shuffleQuestionList.slice(
      0,
      Number(e.target.value)
    );
    dispatch(getSliceQuestionDataList(sliceQuestionList));
  };
  return (
    <Layout>
      <div className="mt-10 mx-3">
        <QuestionCard onClick={handleClick} isChoice={choice} />
      </div>
    </Layout>
  );
};

export default QuestionExplanationPageTemplate;
