import React from "react";
import { getData } from "../../functions/getData";
import QuestionPageTemplate from "../../template/QuestionPageTemplate";
import { AnswerList } from "../../types/questionTypes";

type Props = {
  answerDataList: AnswerList[];
};

const QuestionPage = (props: Props) => {
  const { answerDataList } = props;

  return <QuestionPageTemplate answerDataList={answerDataList} />;
};

export async function getStaticProps() {
  const answerDataList = await getData("skillAnswerDataList");

  return {
    props: {
      answerDataList,
    },
  };
}

export default QuestionPage;
