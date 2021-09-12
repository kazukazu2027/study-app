import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase";
import { db } from "../Firebase/firebase";
import { shuffle } from "../functions/Shuffle";
import { getQuestionDataList } from "../redux/action/questionAction";
import Layout from "./layouts/Layout";
import Card from "./layouts/Card";
import TitleInCard from "./parts/Card/TitleInCard";
import TextInCard from "./parts/Card/TextInCard";
import Button from "./parts/Button/Button";
import { getQuestionCategorySelector } from "../redux/selector/questionSelector";
import { RootState } from "../redux/store";
import SubTitle from "./parts/Title/SubTitle";

const CategoryQuestionPage = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state: RootState) => state);
  const questionCategory = getQuestionCategorySelector(selector);

  useEffect(() => {
    const questionDataList: firebase.firestore.DocumentData[] = [];
    (async () => {
      await db
        .collection("questionDataList")
        .get()
        .then((snapShots) => {
          snapShots.forEach((doc) => {
            questionDataList.push(doc.data());
            switch (questionCategory) {
              case "言語":
                const filterQuestionDataList = questionDataList.filter(
                  (question) => question.category === "skill"
                );
                const shuffleQuestionList = shuffle(filterQuestionDataList);
                const questionList = shuffleQuestionList.slice(0, 3);
                dispatch(getQuestionDataList([]));
                dispatch(getQuestionDataList(questionList));
                break
              case "git用語":
                const filterGitQuestionDataList = questionDataList.filter(
                  (question) => question.category === "git"
                );
                const shuffleGitQuestionList = shuffle(
                  filterGitQuestionDataList
                );
                const questionGitList = shuffleGitQuestionList.slice(0, 3);
                dispatch(getQuestionDataList([]));
                dispatch(getQuestionDataList(questionGitList));
                break
            }
          });
        });
    })();
  }, []);

  return (
    <Layout>
      <SubTitle>カテゴリー別問題</SubTitle>
      <Card>
        <Image src={"/studying.png"} width={360} height={240} />
        <TitleInCard>プログラミング用語を学ぶ</TitleInCard>
        <p className="text-center text-lg">[{questionCategory}]</p>
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

export default CategoryQuestionPage;
