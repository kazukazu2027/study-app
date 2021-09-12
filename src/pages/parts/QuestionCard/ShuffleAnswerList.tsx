import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCheckedAnswer } from "../../../redux/action/answerAction";
import { getAnswerListSelector, getCheckedAnswerIsCheckedSelector } from "../../../redux/selector/answerSelector";
import {
  getQuestionDataListSelector,
} from "../../../redux/selector/questionSelector";
import { RootState } from "../../../redux/store";

const ShuffleAnswerList = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state: RootState) => state);

  const questionDataList = getQuestionDataListSelector(selector);
  const isChecked = getCheckedAnswerIsCheckedSelector(selector);
  const shuffleAnswerList = getAnswerListSelector(selector);
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
    </>
  );
};

export default ShuffleAnswerList;
