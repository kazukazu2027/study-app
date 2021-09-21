import React from "react";
import Answer from "./components/QuestionPage/Answer";
import Question from "./components/QuestionPage/Question";
import Layout from "./layouts/Layout";

const QuestionPage = () => {
  const ref = React.createRef<HTMLDivElement>();
  const scrollToBottomOfList = React.useCallback(() => {
    ref!.current!.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [ref]);

  return (
    <Layout>
      <div className="mx-2 mt-16">
        <Question />
        <Answer />
        <div id="bottom" ref={ref} />
      </div>
    </Layout>
  );
};

export default QuestionPage;
