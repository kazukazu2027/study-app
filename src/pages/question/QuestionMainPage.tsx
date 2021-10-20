import React from "react";
import Layout from "../../layouts/Layout";
import Category from "../../components/QuestionMainPage/Category";
import StudyOfWordCard from "../../parts/Card/StudyOfWordCard";

const QuestionMainPage = () => {
  return (
    <Layout>
      <div className="py-10 mx-3">
        <StudyOfWordCard href="/question/QuestionExplanationPage" />
        <Category />
      </div>
    </Layout>
  );
};

export default QuestionMainPage;
