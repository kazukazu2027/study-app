import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getQuestionDataListSelector,
  getQuestionNumberSelector,
} from "../../../redux/selector/questionSelector";
import { RootState } from "../../../redux/store";
import { makeAnswerList } from "../../../functions/makeAnswerList";
import QuestionNumber from "../../parts/QuestionCard/QuestionNumber";
import QuestionTitle from "../../parts/QuestionCard/QuestionTitle";
import ShuffleAnswerList from "../../parts/QuestionCard/ShuffleAnswerList";
import { getAnswerList } from "../../../redux/action/answerAction";
import AnswerList from "../ResultPage/AnswerList";

export type Data = {
  question: string;
  questionID: string;
  category: string;
  explanation: string;
  answerList: {
    ID: string;
    body: string;
    check: boolean;
  };
};

export type AnswerList = {
  body: string;
  check: boolean;
  category: string;
};

type Props = {
  answerDataList: AnswerList[];
};

const Question = (props: Props) => {
  const { answerDataList } = props;
  const dispatch = useDispatch();

  const selector = useSelector((state: RootState) => state);
  const questionDataList = getQuestionDataListSelector(selector);
  const questionNumber = getQuestionNumberSelector(selector);

  const [shuffleAnswerList, setShuffleAnswerList] = useState<AnswerList[]>([]);
  console.log(shuffleAnswerList)

  useEffect(() => {
    switch (questionDataList[questionNumber].category) {
      case "skill":
        (async () => {
          const skillAnswerDataList = await answerDataList.filter(
            (answer) => answer.category === "skill"
          );
          const shuffledAnswerList = await makeAnswerList(
            skillAnswerDataList,
            questionDataList,
            questionNumber
          );
          await dispatch(getAnswerList(shuffledAnswerList));
          setShuffleAnswerList(shuffledAnswerList);
        })();
        break;
      case "git":
        (async () => {
          const gitAnswerDataList = await answerDataList.filter(
            (answer) => answer.category === "git"
          );
          const shuffledAnswerList = await makeAnswerList(
            gitAnswerDataList,
            questionDataList,
            questionNumber
          );
          await dispatch(getAnswerList(shuffledAnswerList));
          setShuffleAnswerList(shuffledAnswerList);
        })();
        break;
      case "work":
        (async () => {
          const workAnswerDataList = await answerDataList.filter(
            (answer) => answer.category === "work"
          );
          const shuffledAnswerList = await makeAnswerList(
            workAnswerDataList,
            questionDataList,
            questionNumber
          );
          await dispatch(getAnswerList(shuffledAnswerList));
          setShuffleAnswerList(shuffledAnswerList);
        })();
        break;
      case "network":
        (async () => {
          const networkAnswerDataList = await answerDataList.filter(
            (answer) => answer.category === "network"
          );
          const shuffledAnswerList = await makeAnswerList(
            networkAnswerDataList,
            questionDataList,
            questionNumber
          );
          await dispatch(getAnswerList(shuffledAnswerList));
          setShuffleAnswerList(shuffledAnswerList);
        })();
        break;
    }
  }, [questionNumber]);

  return (
    <>
      <div className="border rounded-lg shadow m-auto">
        <div className="text-center py-8">
          <div className="pb-4">
            <QuestionNumber>{`第${questionNumber + 1}問目`}</QuestionNumber>
          </div>
          <div className="pb-4 px-4">
            <QuestionTitle>
              {questionDataList[questionNumber].question}
            </QuestionTitle>
          </div>
          <div className="w-11/12 m-auto bg-gray-100 rounded-md">
            <div className=" w-10/12 m-auto py-4">
              <ShuffleAnswerList shuffleAnswerList={shuffleAnswerList} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
