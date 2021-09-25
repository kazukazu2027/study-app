import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase";
import { shuffle } from "../functions/Shuffle";
import Layout from "./layouts/Layout";
import Card from "./layouts/Card";
import TitleInCard from "./parts/Card/TitleInCard";
import TextInCard from "./parts/Card/TextInCard";
import Button from "./parts/Button/Button";
import {
  getQuestionCategorySelector,
  getTheNumberOfQuestions as getTheNumberOfQuestionsSelector,
} from "../redux/selector/questionSelector";
import { RootState } from "../redux/store";
import SubTitle from "./parts/Title/SubTitle";
import {
  getSliceQuestionDataList,
  getTheNumberOfQuestions,
} from "../redux/action/questionAction";
import { getData } from "../functions/getData";

type Props = {
  questionData: firebase.firestore.DocumentData[];
};

const CategoryQuestionPage = (props: Props) => {
  const { questionData } = props;
  const dispatch = useDispatch();
  const selector = useSelector((state: RootState) => state);
  const questionCategory = getQuestionCategorySelector(selector);
  const theNumberOfQuestions = getTheNumberOfQuestionsSelector(selector);

  const [choice, setChoice] = useState(false);

  const handleClick = (event: any) => {
    dispatch(getTheNumberOfQuestions(Number(event.target.value)));
    setChoice(true);
    switch (questionCategory) {
      case "言語":
        const filterQuestionDataList = questionData.filter(
          (question) => question.category === "skill"
        );
        const shuffleQuestionList = shuffle(filterQuestionDataList);
        const questionList = shuffleQuestionList.slice(
          0,
          Number(event.target.value)
        );
        dispatch(getSliceQuestionDataList([]));
        dispatch(getSliceQuestionDataList(questionList));
        break;
      case "git用語":
        const filterGitQuestionDataList = questionData.filter(
          (question) => question.category === "git"
        );
        const shuffleGitQuestionList = shuffle(filterGitQuestionDataList);
        const questionGitList = shuffleGitQuestionList.slice(
          0,
          Number(event.target.value)
        );
        dispatch(getSliceQuestionDataList([]));
        dispatch(getSliceQuestionDataList(questionGitList));
        break;
      case "職業":
        const filterWorkQuestionDataList = questionData.filter(
          (question) => question.category === "work"
        );
        const shuffleWorkQuestionList = shuffle(filterWorkQuestionDataList);
        const questionWorkList = shuffleWorkQuestionList.slice(
          0,
          Number(event.target.value)
        );
        dispatch(getSliceQuestionDataList([]));
        dispatch(getSliceQuestionDataList(questionWorkList));
        break;
      case "ネットワーク関連":
        const filterNetworkQuestionDataList = questionData.filter(
          (question) => question.category === "network"
        );
        const shuffleNetworkQuestionList = shuffle(
          filterNetworkQuestionDataList
        );
        const questionNetworkList = shuffleNetworkQuestionList.slice(
          0,
          Number(event.target.value)
        );
        dispatch(getSliceQuestionDataList([]));
        dispatch(getSliceQuestionDataList(questionNetworkList));
        break;
    }
  };

  return (
    <Layout>
      <div className="px-3">
        <div className="py-4">
          <SubTitle>カテゴリー別問題</SubTitle>
        </div>
        <Card>
          <Image src={"/studying.png"} width={360} height={240} />
          <TitleInCard>プログラミング用語を学ぶ</TitleInCard>
          <p className="text-center text-lg">[{questionCategory}]</p>
          <div className="py-5">
            <TextInCard>
              これから、問題が{theNumberOfQuestions}問表示されます。
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
  return {
    props: {
      questionData,
    },
  };
}

export default CategoryQuestionPage;
