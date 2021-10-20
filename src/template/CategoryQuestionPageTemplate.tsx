import React, { useState } from "react";
import Layout from "../layouts/Layout";
import SubTitle from "../parts/Title/SubTitle";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { getQuestionCategorySelector } from "../redux/selector/questionSelector";
import {
  getQuestionNumber,
  getSliceQuestionDataList,
  getTheNumberOfQuestions,
} from "../redux/action/questionAction";
import { shuffle } from "../functions/Shuffle";
import { getResultAnswerAction } from "../redux/action/answerAction";
import { questionData } from "../types/questionTypes";
import { translateCategory } from "../functions/translateCategory";
import QuestionCard from "../parts/Card/QuestionCard";

type Props = {
  questionData: questionData[];
};

const CategoryQuestionPageTemplate = (props: Props) => {
  const { questionData } = props;
  const dispatch = useDispatch();
  const selector = useSelector((state: RootState) => state);

  const questionCategory = getQuestionCategorySelector(selector);

  const [choice, setChoice] = useState(false);

  const handleClick = (event: any) => {
    dispatch(getTheNumberOfQuestions(Number(event.target.value)));
    dispatch(getQuestionNumber(0));
    dispatch(getResultAnswerAction([]));
    setChoice(true);
    const filterQuestionDataList = questionData.filter(
      (question) => question.category === questionCategory
    );
    const shuffleQuestionList = shuffle(filterQuestionDataList);
    const questionList = shuffleQuestionList.slice(
      0,
      Number(event.target.value)
    );
    dispatch(getSliceQuestionDataList([]));
    dispatch(getSliceQuestionDataList(questionList));
  };

  const categoryName = translateCategory(questionCategory);
  return (
    <Layout>
      <div className="px-3">
        <div className="py-4">
          <SubTitle>カテゴリー別問題</SubTitle>
        </div>
        <p className="text-center font-semibold text-xl pb-4">
          [{categoryName}]
        </p>
        <QuestionCard onClick={handleClick} isChoice={choice} />
      </div>
    </Layout>
  );
};

export default CategoryQuestionPageTemplate;
