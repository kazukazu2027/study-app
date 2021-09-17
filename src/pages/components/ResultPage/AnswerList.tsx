import React, { useState } from "react";
import { AnswerData } from "../../../redux/action/answerAction";

type Props = {
  question: AnswerData;
};

const AnswerList = (props: Props) => {
  const { question } = props;
  const [displayExplanation, setDisplayExplanation] = useState(false);

  const handleExplanation = () => {
    setDisplayExplanation(!displayExplanation);
  };
  return (
    <>
      <button
        className={`${
          question.isCorrect ? "bg-green-100" : "bg-red-100"
        } border-t-2 px-4 w-full text-left`}
        onClick={handleExplanation}
      >
        <div className=" py-2 flex">
          <p className="">{question.question}</p>
          <p className="ml-auto">＋</p>
        </div>
      </button>
      {displayExplanation && (
        <div
          className="bg-gray-100 px-4 py-2 Button"
          style={{ transition: "height 400ms ease-in-out" }}
        >
          <p className="">{question.explanation}</p>
        </div>
      )}
    </>
  );
};

export default AnswerList;
