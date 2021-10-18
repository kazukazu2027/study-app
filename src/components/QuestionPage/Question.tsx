import React from "react";
import QuestionNumber from "../../parts/QuestionCard/QuestionNumber";
import QuestionTitle from "../../parts/QuestionCard/QuestionTitle";
import ShuffleAnswerList from "../../parts/QuestionCard/ShuffleAnswerList";
import { AnswerList, questionData } from "../../types/questionTypes";

type Props = {
  questionDataList: questionData[];
  questionNumber: number;
  shuffleAnswerList: AnswerList[];
};

const Question = (props: Props) => {
  const { questionDataList, questionNumber, shuffleAnswerList } = props;
  console.log(shuffleAnswerList);

  return (
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
  );
};

export default Question;
