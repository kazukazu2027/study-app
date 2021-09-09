import React from "react";
import Layout from "./layouts/Layout";
import Question from "./components/QuestionPage/Question";
import Answer from "./components/QuestionPage/Answer";

const QuestionPage = () => {
  return (
    <Layout>
      <Question />
      <Answer />
    </Layout>
  );
};

export default QuestionPage;
