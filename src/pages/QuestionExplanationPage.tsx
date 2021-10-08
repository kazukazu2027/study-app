import React from "react";
import { shuffle } from "../functions/Shuffle";
import { getData } from "../functions/getData";
import firebase from "firebase";
import QuestionExplanationPageContainer from "../components/QuestionExplanationPage/QuestionExplanationPageContainer";

type Props = {
  shuffleQuestionList: firebase.firestore.DocumentData[];
};

const QuestionExplanationPage = (props: Props) => {
  const { shuffleQuestionList } = props;

  return (
    <QuestionExplanationPageContainer
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
