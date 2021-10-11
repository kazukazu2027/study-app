import React from "react";
import { useSelector } from "react-redux";
import AnswerCard from "../../layouts/AnswerCard";
import AnswerCardContainer from "../../parts/AnswerCard/AnswerCardContainer";
import { getCheckedAnswerStringSelector } from "../../redux/selector/answerSelector";
import { RootState } from "../../redux/store";

type Props = {
  correctAnswerString: string;
};

const Answer = (props: Props) => {
  const { correctAnswerString } = props;
  const selector = useSelector((state: RootState) => state);
  const checkedAnswerString = getCheckedAnswerStringSelector(selector);

  return (
    <div className={`${checkedAnswerString ? "block" : "hidden"}`}>
      {correctAnswerString === checkedAnswerString ? (
        <AnswerCard>
          <AnswerCardContainer
            answerResult="正解"
            color={"bg-green-200"}
            correctAnswerString={correctAnswerString}
          />
        </AnswerCard>
      ) : (
        <AnswerCard>
          <AnswerCardContainer
            answerResult="不正解"
            color={"bg-red-200"}
            correctAnswerString={correctAnswerString}
          />
        </AnswerCard>
      )}
    </div>
  );
};

export default Answer;
