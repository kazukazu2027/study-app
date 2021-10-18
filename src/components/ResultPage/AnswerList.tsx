import React, { useState } from "react";
import BookMark from "../../../public/bookmark2.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { addFavoriteWordsSelector } from "../../redux/selector/favoriteSelector";
import { toggleItem } from "../../functions/toggleItem";
import { addFavoriteWordAction } from "../../redux/action/favoriteAction";
import { userAnswerData } from "../../types/questionTypes";

type Props = {
  question: userAnswerData;
};

const AnswerList = (props: Props) => {
  const { question } = props;
  const dispatch = useDispatch();
  const [displayExplanation, setDisplayExplanation] = useState(false);
  const selector = useSelector((state: RootState) => state);
  const questionIDs = addFavoriteWordsSelector(selector);
  const questionID: string = question.id;

  const handleExplanation = () => {
    setDisplayExplanation(!displayExplanation);
  };

  const handleFavorite = () => {
    const newQuestionIDs = toggleItem(questionIDs, questionID);
    dispatch(addFavoriteWordAction(newQuestionIDs));
  };
  const isFavorited = questionIDs.includes(questionID);

  return (
    <>
      <div
        className={`${
          question.isCorrect ? "bg-green-300" : "bg-red-300"
        } py-2 flex border-t-2`}
      >
        <button onClick={handleFavorite}>
          <div
            className={`fill-current stroke-current ${
              isFavorited ? "text-red-400" : "text-gray-200"
            } pl-2`}
          >
            <BookMark />
          </div>
        </button>
        <button
          className={`flex px-4 w-full text-left`}
          onClick={handleExplanation}
        >
          <p className="">{question.question}</p>
          <p className="ml-auto">＋</p>
        </button>
      </div>
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
