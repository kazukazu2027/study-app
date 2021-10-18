import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Answer from "../../components/QuestionPage/Answer";
import Question from "../../components/QuestionPage/Question";
import { getData } from "../../functions/getData";
import { makeAnswerList } from "../../functions/makeAnswerList";
import Layout from "../../layouts/Layout";
import {
  getQuestionDataListSelector,
  getQuestionNumberSelector,
} from "../../redux/selector/questionSelector";
import { RootState } from "../../redux/store";
import { AnswerList } from "../../types/questionTypes";

type Props = {
  answerDataList: AnswerList[];
};

const QuestionPage = (props: Props) => {
  const { answerDataList } = props;
  const [shuffleAnswerList, setShuffleAnswerList] = useState<AnswerList[]>([]);
  const [correctAnswerString, setCorrectAnswerString] = useState("");
  const selector = useSelector((state: RootState) => state);
  const questionDataList = getQuestionDataListSelector(selector);
  const questionNumber = getQuestionNumberSelector(selector);

  useEffect(() => {
    (async () => {
      const answerList = answerDataList.filter(
        (answer) =>
          answer.category === questionDataList[questionNumber].category
      );
      const shuffledAnswerList = makeAnswerList(
        answerList,
        questionDataList,
        questionNumber
      );
      const correctAnswerString = shuffledAnswerList.filter(
        (list) => list.check === true
      )[0].body;
      setShuffleAnswerList(shuffledAnswerList);
      setCorrectAnswerString(correctAnswerString);
    })();
  }, [questionNumber]);

  return (
    <Layout>
      <div className="mx-2 mt-16">
        <Question
          questionDataList={questionDataList}
          questionNumber={questionNumber}
          shuffleAnswerList={shuffleAnswerList}
        />
        <Answer correctAnswerString={correctAnswerString} />
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
