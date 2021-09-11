import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Card from "./layouts/Card";
import Button from "./parts/Button";
import { getQuestionDataList } from "../redux/action/questionList";
import Layout from "./layouts/Layout";
import { db } from "../Firebase/firebase";
import firebase from "firebase";
import { shuffle } from "../functions/Shuffle";
import TitleInCard from "./parts/Card/TitleInCard";
import TextInCard from "./parts/Card/TextInCard";

const QuestionExplanationPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const questionDataList: firebase.firestore.DocumentData[] = [];
    db.collection("questionDataList")
      .get()
      .then((snapShots) => {
        snapShots.forEach((doc) => {
          questionDataList.push(doc.data());
          const shuffleQuestionList = shuffle(questionDataList);
          const questionList = shuffleQuestionList.slice(0, 3);
          dispatch(getQuestionDataList([]));
          dispatch(getQuestionDataList(questionList));
        });
      });
  }, []);

  return (
    <Layout>
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
            <Button color={"bg-blue-500"} text={"学習する"} />
          </div>
        </Link>
      </Card>
    </Layout>
  );
};

export default QuestionExplanationPage;
