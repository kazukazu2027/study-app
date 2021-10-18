import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteWordAction } from "../../redux/action/favoriteAction";
import { RootState } from "../../redux/store";
import { addFavoriteWordsSelector } from "../../redux/selector/favoriteSelector";
import { toggleItem } from "../../functions/toggleItem";
import BookMark from '../../../public/bookmark2.svg'
import { WordData } from "../../types/wordTypes";

type Props = {
  data: WordData;
};

const WordParts = (props: Props) => {
  const { data } = props;
  const dispatch = useDispatch();
  const [displayExplanation, setDisplayExplanation] = useState(false);
  const selector = useSelector((state: RootState) => state);
  const questionIDs = addFavoriteWordsSelector(selector);
  const questionID: string = data.questionID;
  const handleExplanation = () => {
    setDisplayExplanation(!displayExplanation);
  };
  const handleFavorite = () => {
    const newQuestionIDs = toggleItem(questionIDs, questionID);
    dispatch(addFavoriteWordAction(newQuestionIDs));
  };

  const isFavorited = questionIDs.includes(questionID);

  return (
    <div>
      <div className="border-t-2 flex px-2 py-2">
        <a onClick={handleFavorite}>
          <div
            className={`fill-current stroke-current ${
              isFavorited ? "text-red-400" : "text-gray-200"
            } `}
          >
            <BookMark />
          </div>
        </a>
        <a className="flex w-11/12" onClick={handleExplanation}>
          <a className="pt-1 pl-4 no-underline">
            <p>{data.question}</p>
          </a>
          <p className="ml-auto pt-1">＋</p>
        </a>
      </div>
      {displayExplanation && (
        <div className={"bg-gray-100 px-4 py-2"}>
          <p>{data.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default WordParts;
