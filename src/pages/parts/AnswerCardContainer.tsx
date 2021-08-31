import React from "react";
import { useSelector } from "react-redux";
import { getCheckedAnswerStringSelector, getCountAnswerSelector } from "../../redux/QuestionList/answerSelector";
import { RootState } from "../../redux/store";
import LastQuestion from "./AnswerParts/LastQuestion";
import QuestionCard from "./AnswerParts/QuestionCard";

interface Props {
  title: string;
  color: string;
}

const AnswerCardContainer = (props: Props) => {
  const { title, color } = props;
  const selector = useSelector((state: RootState) => state);

  const answer = getCheckedAnswerStringSelector(selector);
  const resultAnswersList = getCountAnswerSelector(selector)




  return (
    <>
      <div className={`${color} rounded py-4 w-5/12 m-auto`}>
        <p>{title}</p>
      </div>
      <div className=" font-bold text-2xl py-8">
        <p>{answer}</p>
      </div>

      {resultAnswersList.length === 2 ? (
        <LastQuestion title={title} />
      ) : (
        <QuestionCard title={title} />
      )}
    </>
  );
};

export default AnswerCardContainer;
