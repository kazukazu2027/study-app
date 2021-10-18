import React from "react";
import { shuffle } from "../../functions/Shuffle";
import { getData } from "../../functions/getData";
import QuestionExplanationPageTemplate from "../../template/QuestionExplanationPageTemplate";
import { questionData } from "../../types/questionTypes";

type Props = {
  shuffleQuestionList: questionData[];
};

const QuestionExplanationPage = (props: Props) => {
  const { shuffleQuestionList } = props;

  return (
    <QuestionExplanationPageTemplate
      shuffleQuestionList={shuffleQuestionList}
    />
  );
};

export async function getStaticProps() {
  const questionData = await getData("questionDataList");
  const shuffleQuestionList = shuffle(questionData);
  return {
    props: {
      shuffleQuestionList,
    },
  };
}

export default QuestionExplanationPage;
