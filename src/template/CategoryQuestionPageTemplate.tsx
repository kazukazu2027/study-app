import React, { useState } from "react";
import Card from "../layouts/Card";
import Layout from "../layouts/Layout";
import SubTitle from "../parts/Title/SubTitle";
import Image from "next/image";
import TitleInCard from "../parts/Card/TitleInCard";
import TextInCard from "../parts/Card/TextInCard";
import SelectTheNumberOfQuestion from "../components/QuestionExplanationPage/SelectTheNumberOfQuestion";
import Link from "next/link";
import Button from "../parts/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  getQuestionCategorySelector,
  getTheNumberOfQuestions as getTheNumberOfQuestionsSelector,
} from "../redux/selector/questionSelector";
import {
  getQuestionNumber,
  getSliceQuestionDataList,
  getTheNumberOfQuestions,
} from "../redux/action/questionAction";
import firebase from "firebase";
import { shuffle } from "../functions/Shuffle";
import { getResultAnswerAction } from "../redux/action/answerAction";

type Props = {
  questionData: firebase.firestore.DocumentData[];
};

const CategoryQuestionPageTemplate = (props: Props) => {
  const { questionData } = props;
  const dispatch = useDispatch();
  const selector = useSelector((state: RootState) => state);
  const questionCategory = getQuestionCategorySelector(selector);
  const theNumberOfQuestions = getTheNumberOfQuestionsSelector(selector);

  const [choice, setChoice] = useState(false);

  const handleClick = (event: any) => {
    dispatch(getTheNumberOfQuestions(Number(event.target.value)));
    dispatch(getQuestionNumber(0));
    dispatch(getResultAnswerAction([]));
    setChoice(true);
    const filterQuestionDataList = questionData.filter(
      (question) => question.category === questionCategory
    );
    const shuffleQuestionList = shuffle(filterQuestionDataList);
    const questionList = shuffleQuestionList.slice(
      0,
      Number(event.target.value)
    );
    dispatch(getSliceQuestionDataList([]));
    dispatch(getSliceQuestionDataList(questionList));
  };
  const translateCategory = () => {
    switch (questionCategory) {
      case "skill":
        return "言語";
      case "work":
        return "職業";
      case "network":
        return "ネットワーク言語";
      case "git":
        return "git用語";
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
          <p className="text-center text-lg">[{translateCategory()}]</p>
          <div className="py-5">
            <TextInCard>
              これから、問題が{theNumberOfQuestions}問表示されます。
              正しいと思う答えを4択の中から選んでください。
            </TextInCard>
          </div>
          <div className="pb-5">
            <SelectTheNumberOfQuestion handleClick={handleClick} />
          </div>

          <Link href={choice ? "/question/QuestionPage" : ""}>
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

export default CategoryQuestionPageTemplate;
