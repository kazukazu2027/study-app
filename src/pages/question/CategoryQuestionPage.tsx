import React from "react";
import firebase from "firebase";
import { getData } from "../../functions/getData";
import CategoryQuestionPageTemplate from "../../template/CategoryQuestionPageTemplate";

type Props = {
  questionData: firebase.firestore.DocumentData[];
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
