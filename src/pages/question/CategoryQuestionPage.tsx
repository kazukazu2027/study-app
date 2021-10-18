import React from "react";
import { getData } from "../../functions/getData";
import CategoryQuestionPageTemplate from "../../template/CategoryQuestionPageTemplate";
import { questionData } from "../../types/questionTypes";

type Props = {
  questionData: questionData[];
};

const CategoryQuestionPage = (props: Props) => {
  const { questionData } = props;
  return <CategoryQuestionPageTemplate questionData={questionData} />;
};

export async function getStaticProps() {
  const questionData = await getData("questionDataList");
  return {
    props: {
      questionData,
    },
  };
}

export default CategoryQuestionPage;
