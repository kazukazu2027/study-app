import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase";
import { db } from "../Firebase/firebase";
import { shuffle } from "../functions/Shuffle";
import {
  getQuestionDataList,
  getQuestionNumber,
} from "../redux/action/questionAction";
import Layout from "./layouts/Layout";
import Card from "./layouts/Card";
import TitleInCard from "./parts/Card/TitleInCard";
import TextInCard from "./parts/Card/TextInCard";
import Button from "./parts/Button/Button";
import { getData } from "../functions/getData";
import { RootState } from "../redux/store";
import { countCorrectAnswer } from "../redux/action/answerAction";

const QuestionExplanationPage = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state: RootState) => state);

  useEffect(() => {
    (async () => {
      const questionData = await getData("questionDataList");
      const shuffleQuestionList = shuffle(questionData);
      const sliceQuestionList = shuffleQuestionList.slice(0, 3);
      dispatch(getQuestionNumber(0));
      dispatch(getQuestionDataList([]));
      dispatch(getQuestionDataList(sliceQuestionList));
      dispatch(countCorrectAnswer([]));
    })();
  }, []);

  return (
    <Layout>
      <div className="mt-10">
        <Card>
          <Image src={"/studying.png"} width={360} height={240} />
          <TitleInCard>プログラミング用語を学ぶ</TitleInCard>
          <div className="py-5">
            <TextInCard>
              これから、問題が１０問表示されます。
              正しいと思う答えを4択の中から選んでください。
            </TextInCard>
          </div>
          <Link href={"QuestionPage"}>
            <div className="pb-8 text-center">
              <Button color={"bg-blue-500"}>学習する</Button>
            </div>
          </Link>
        </Card>
      </div>
    </Layout>
  );
};

export default QuestionExplanationPage;
