import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { shuffle } from "../functions/Shuffle";
import {
  getQuestionNumber,
  getSliceQuestionDataList,
  getTheNumberOfQuestions,
} from "../redux/action/questionAction";
import { getData } from "../functions/getData";
import { countCorrectAnswer } from "../redux/action/answerAction";
import firebase from "firebase";
import Layout from "../layouts/Layout";
import Card from "../layouts/Card";
import TitleInCard from "../parts/Card/TitleInCard";
import TextInCard from "../parts/Card/TextInCard";
import Button from "../parts/Button/Button";
import SelectTheNumberOfQuestion from "../components/QuestionExplanationPage/SelectTheNumberOfQuestion";

type Props = {
  shuffleQuestionList: firebase.firestore.DocumentData[];
};

const QuestionExplanationPage = (props: Props) => {
  const { shuffleQuestionList } = props;
  const dispatch = useDispatch();
  const [choice, setChoice] = useState(false);

  const handleClick = (e: any) => {
    dispatch(getTheNumberOfQuestions(Number(e.target.value)));
    const sliceQuestionList = shuffleQuestionList.slice(
      0,
      Number(e.target.value)
    );
    dispatch(getSliceQuestionDataList(sliceQuestionList));
    dispatch(getQuestionNumber(0));
    dispatch(countCorrectAnswer([]));
    setChoice(true);
  };

  return (
    <Layout>
      <div className="mt-10 mx-3">
        <Card>
          <Image src={"/studying.png"} width={360} height={240} />
          <TitleInCard>プログラミング用語を学ぶ</TitleInCard>
          <div className="py-5">
            <TextInCard>
              これから、問題が１０問表示されます。
              正しいと思う答えを4択の中から選んでください。
            </TextInCard>
          </div>
          <div className="pb-5">
            <SelectTheNumberOfQuestion handleClick={handleClick} />
          </div>
          <Link href={choice ? "QuestionPage" : ""}>
            <div className="pb-8 text-center">
              <Button color={choice ? "bg-blue-500" : "bg-gray-400"}>
                学習する
              </Button>
            </div>
          </Link>
        </Card>
      </div>
    </Layout>
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
