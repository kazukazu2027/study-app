import React from "react";
import Answer from "./components/QuestionPage/Answer";
import Question from "./components/QuestionPage/Question";
import Layout from "./layouts/Layout";

const QuestionPage = () => {
  return (
    <Layout>
      <div className="mx-2 mt-16">
        <Question />
        <Answer />
      </div>
    </Layout>
  );
};

export default QuestionPage;
