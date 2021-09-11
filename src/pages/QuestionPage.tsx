import React from "react";
import Answer from "./components/QuestionPage/Answer";
import Question from "./components/QuestionPage/Question";
import Layout from "./layouts/Layout";

const QuestionPage = () => {
  return (
    <Layout>
      <Question />
      <Answer />
    </Layout>
  );
};

export default QuestionPage;
