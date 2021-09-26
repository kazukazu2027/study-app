import React from "react";
import { getData } from "../functions/getData";
import Answer from "./components/QuestionPage/Answer";
import Question, { AnswerList } from "./components/QuestionPage/Question";
import Layout from "./layouts/Layout";

type Props = {
  answerDataList: AnswerList[];
};

const QuestionPage = (props: Props) => {
  const { answerDataList } = props;
  console.log(answerDataList)

  return (
    <Layout>
      <div className="mx-2 mt-16">
        <Question answerDataList={answerDataList} />
        <Answer />
      </div>
    </Layout>
  );
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
