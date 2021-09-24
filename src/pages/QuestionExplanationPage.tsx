import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { shuffle } from "../functions/Shuffle";
import {
  getQuestionNumber,
  getSliceQuestionDataList,
  getTheNumberOfQuestions,
} from "../redux/action/questionAction";
import Layout from "./layouts/Layout";
import Card from "./layouts/Card";
import TitleInCard from "./parts/Card/TitleInCard";
import TextInCard from "./parts/Card/TextInCard";
import Button from "./parts/Button/Button";
import { getData } from "../functions/getData";
import { countCorrectAnswer } from "../redux/action/answerAction";
import firebase from "firebase";

type Props = {
  shuffleQuestionList: firebase.firestore.DocumentData[];
};

const QuestionExplanationPage = (props: Props) => {
  const { shuffleQuestionList } = props;
  const dispatch = useDispatch();
  const [choice, setChoice] = useState(false);

  const handleClick = (event: any) => {
    dispatch(getTheNumberOfQuestions(Number(event.target.value)));
    const sliceQuestionList = shuffleQuestionList.slice(0, event.target.value);
    dispatch(getSliceQuestionDataList(sliceQuestionList));
    setChoice(true);
  };

  useEffect(() => {
    (async () => {
      await dispatch(getQuestionNumber(0));
      await dispatch(countCorrectAnswer([]));
    })();
  }, []);

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
            <p>問題数を選んでください</p>
            <div className="flex justify-between w-3/4 m-auto">
              <label className="my-2 mr-4">
                <input
                  id="answerRadio"
                  type="radio"
                  className="mt-4 mr-2 "
                  value={3}
                  onClick={handleClick}
                  name={"問題数"}
                />
                <span>3問</span>
              </label>
              <label className="my-2 mr-4">
                <input
                  id="answerRadio"
                  type="radio"
                  className="mt-4 mr-2 "
                  value={7}
                  onClick={handleClick}
                  name={"問題数"}
                />
                <span>7問</span>
              </label>
              <label className="my-2">
                <input
                  id="answerRadio"
                  type="radio"
                  className="mt-4 mr-2 "
                  value={10}
                  onClick={handleClick}
                  name={"問題数"}
                />
                <span>10問</span>
              </label>
            </div>
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
