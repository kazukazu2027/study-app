import React, { useEffect } from "react";
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
import { getData } from "../../../functions/getData";
import { getAnswerList } from "../../../redux/action/answerAction";
import { getAnswerListSelector } from "../../../redux/selector/answerSelector";

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
};

const Question = () => {
  const dispatch = useDispatch();

  const selector = useSelector((state: RootState) => state);
  const questionDataList = getQuestionDataListSelector(selector);
  const questionNumber = getQuestionNumberSelector(selector);
  const shuffleAnswerList = getAnswerListSelector(selector);

  console.log(questionNumber);
  useEffect(() => {
    switch (questionDataList[questionNumber].category) {
      case "skill":
        (async () => {
          const skillAnswerDataList = await getData("skillAnswerDataList");
          const shuffledAnswerList = makeAnswerList(
            skillAnswerDataList,
            questionDataList,
            questionNumber
          );
          dispatch(getAnswerList(shuffledAnswerList));
        })();
        break;
      case "git":
        (async () => {
          const gitAnswerDataList = await getData("gitAnswerDataList");
          const gitShuffledAnswerList = makeAnswerList(
            gitAnswerDataList,
            questionDataList,
            questionNumber
          );
          dispatch(getAnswerList(gitShuffledAnswerList));
        })();
        break;
    }
  }, [questionNumber]);

  console.log(questionNumber);

  return (
    <>
      {shuffleAnswerList && (
        <div className="border rounded-lg shadow m-auto mt-16">
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
                <ShuffleAnswerList />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Question;
