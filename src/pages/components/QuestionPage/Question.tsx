import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import questionData from "../../../../data.json";
import { getCheckedAnswer } from "../../../redux/action/countAnswer";
import { getCheckedAnswerIsCheckedSelector } from "../../../redux/QuestionList/answerSelector";
import {
  getQuestionDataListSelector,
  getQuestionNumberSelector,
} from "../../../redux/QuestionList/selector";
import { RootState } from "../../../redux/store";

export type Data = {
  question: string;
  questionID: string;
  answerList: [
    {
      ID: string;
      body: string;
      check: boolean;
    }
  ];
};

type AnswerList = {
  ID: string;
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
    const answerList = questionDataList[questionNumber].answerList;
    // 問題のリストをシャッフルして問題数を絞る
    const shuffle = ([...answerList]) => {
      for (let i = answerList.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [answerList[i], answerList[j]] = [answerList[j], answerList[i]];
      }
      return answerList;
    };
    const shuffleAnswerList = shuffle(answerList);
    setShuffleAnswerList(shuffleAnswerList);
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
                    <div key={answer.ID} className="text-left">
                      {isChecked ? (
                        <label className="flex my-2">
                          <input
                            type="radio"
                            className="mt-2 mr-2 "
                            value={answer.body}
                            disabled
                            name={questionData[0].questionID}
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
                            name={questionData[0].questionID}
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
