import React from "react";
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

const Question = () => {
  const dispatch = useDispatch();

  const selector = useSelector((state: RootState) => state);
  const questionDataList = getQuestionDataListSelector(selector);
  const questionNumber = getQuestionNumberSelector(selector);
  const isChecked = getCheckedAnswerIsCheckedSelector(selector);

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
                {questionDataList[questionNumber].answerList.map((answer) => {
                  return (
                    <div key={answer.ID}>
                      {isChecked ? (
                        <label className="flex">
                          <input
                            type="radio"
                            className="mt-1 "
                            value={answer.body}
                            disabled
                            name={questionData[0].questionID}
                          />
                          <p className="pl-3 text-gray-400">{answer.body}</p>
                        </label>
                      ) : (
                        <label className="flex ">
                          <input
                            type="radio"
                            className="mt-1"
                            value={answer.body}
                            onClick={handleCheck}
                            name={questionData[0].questionID}
                          />
                          <p className="pl-3">{answer.body}</p>
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
