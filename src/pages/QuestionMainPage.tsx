import Link from "next/link";
import React, { useEffect } from "react";
import Layout from "./layouts/Layout";
import Image from "next/image";
import Card from "./layouts/Card";
import { useDispatch } from "react-redux";
import questionData from "../../data.json";
import { getQuestionDataList } from "../redux/action/questionList";
import Button from "./parts/Button";

const QuestionMainPage = () => {
  const dispatch = useDispatch();

  // 問題のリストをシャッフルして問題数を絞る
  useEffect(() => {
    const shuffle = ([...questionData]) => {
      for (let i = questionData.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questionData[i], questionData[j]] = [questionData[j], questionData[i]];
      }
      return questionData;
    };
    const shuffleQuestionList = shuffle(questionData);
    const questionList = shuffleQuestionList.slice(0, 3);
    dispatch(getQuestionDataList([]));
    dispatch(getQuestionDataList(questionList));
  }, []);

  return (
    <Layout>
      <div className="pt-10">
        <Card>
          <div className="">
            <div>
              <Image src={"/studying.png"} width={360} height={240} />
            </div>
            <div className="">
              <h2 className="text-2xl">プログラミング用語を学ぶ</h2>
            </div>
            <div className="py-5">
              <p>
                これから、問題が１０問表示されます。
                正しいと思う答えを4択の中から選んでください。
              </p>
            </div>
            <Link href={"QuestionPage"}>
              <div className="pb-8 text-center">
                <Button color={"bg-blue-500"} text={"学習する"} />
              </div>
            </Link>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default QuestionMainPage;
