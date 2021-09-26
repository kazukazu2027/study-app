import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCheckedAnswer } from "../../redux/action/answerAction";
import { getCheckedAnswerIsCheckedSelector } from "../../redux/selector/answerSelector";
import { getQuestionDataListSelector } from "../../redux/selector/questionSelector";
import { RootState } from "../../redux/store";
import { AnswerList } from "../../components/QuestionPage/Question";

type Props = {
  shuffleAnswerList: AnswerList[];
};

const ShuffleAnswerList = (props: Props) => {
  const { shuffleAnswerList } = props;
  const dispatch = useDispatch();
  const selector = useSelector((state: RootState) => state);

  const questionDataList = getQuestionDataListSelector(selector);
  const isChecked = getCheckedAnswerIsCheckedSelector(selector);

  const scrollBottomRef = useRef<HTMLDivElement>(null);
  const handleCheck = (event: any) => {
    dispatch(
      getCheckedAnswer({
        isChecked: true,
        checkedAnswerString: event.target.value,
      })
    );
  };

  useEffect(() => {
    scrollBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [handleCheck]);
  console.log(shuffleAnswerList)
  return (
    <>
      {shuffleAnswerList.length > 0 &&
        shuffleAnswerList.map((answer) => {
          return (
            <div key={answer.body} className="text-left">
              <label className="my-2">
                <input
                  id="answerRadio"
                  type="radio"
                  className="mt-4 mr-2 "
                  value={answer.body}
                  onClick={handleCheck}
                  name={questionDataList[0].questionID}
                  disabled={isChecked}
                />
                <span className={`${isChecked && "text-gray-400"}`}>
                  {answer.body}
                </span>
              </label>
            </div>
          );
        })}
      <div ref={scrollBottomRef} />
    </>
  );
};

export default ShuffleAnswerList;
