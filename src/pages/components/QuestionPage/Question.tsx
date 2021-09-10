import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import answerData from "../../../../skillAnswer.json";
import gitAnswerData from "../../../../gitAnswer.json";
import { shuffle } from "../../../functions/Shuffle";
import { getCheckedAnswer } from "../../../redux/action/countAnswer";
import { getAnswerList } from "../../../redux/action/questionList";
import { getCheckedAnswerIsCheckedSelector } from "../../../redux/QuestionList/answerSelector";
import {
  getQuestionDataListSelector,
  getQuestionNumberSelector,
} from "../../../redux/QuestionList/selector";
import { RootState } from "../../../redux/store";
import { makeAnswerList } from "../../../functions/makeAnswerList";

export type Data = {
  question: string;
  questionID: string;
  category: string;
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
  const isChecked = getCheckedAnswerIsCheckedSelector(selector);

  const [shuffleAnswerList, setShuffleAnswerList] = useState<AnswerList[]>([]);

  useEffect(() => {
    switch (questionDataList[questionNumber].category) {
      case "skill":
        const shuffledAnswerList = makeAnswerList(
          answerData,
          questionDataList,
          questionNumber
        );
        setShuffleAnswerList(shuffledAnswerList);
        dispatch(getAnswerList(shuffledAnswerList));
        break;
      case "git":
        const gitShuffledAnswerList = makeAnswerList(
          gitAnswerData,
          questionDataList,
          questionNumber
        );
        setShuffleAnswerList(gitShuffledAnswerList);
        dispatch(getAnswerList(gitShuffledAnswerList));
        break;
    }
  }, [questionNumber]);

  const handleCheck = (event: any) => {
    dispatch(
      getCheckedAnswer({
        isChecked: true,
        checkedAnswerString: event.target.value,
      })
    );
  };
  return (
    <>
      {questionDataList[questionNumber] && (
        <div className="border rounded-lg shadow m-auto mt-16">
          <div className="text-center py-8">
            <div className="pb-4">
              <p className="">{`第${questionNumber + 1}問目`}</p>
            </div>
            <div className="font-bold text-2xl pb-4">
              <p>{questionDataList[questionNumber].question}</p>
            </div>
            <div className="w-11/12 m-auto bg-gray-100 rounded-md">
              <div className=" w-10/12 m-auto py-4">
                {shuffleAnswerList.map((answer) => {
                  return (
                    <div key={answer.body} className="text-left">
                      {isChecked ? (
                        <label className="flex my-2">
                          <input
                            type="radio"
                            className="mt-2 mr-2 "
                            value={answer.body}
                            disabled
                            name={questionDataList[0].questionID}
                          />
                          <span className="text-gray-400">{answer.body}</span>
                        </label>
                      ) : (
                        <label className="flex my-2">
                          <input
                            type="radio"
                            className="mt-2 mr-2 "
                            value={answer.body}
                            onClick={handleCheck}
                            name={questionDataList[0].questionID}
                          />
                          <span>{answer.body}</span>
                        </label>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Question;
