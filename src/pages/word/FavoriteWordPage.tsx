import React from "react";
import { useSelector } from "react-redux";
import { getData } from "../../functions/getData";
import { addFavoriteWordsSelector } from "../../redux/selector/favoriteSelector";
import { RootState } from "../../redux/store";
import { Word } from "./AllWordPage";
import FavoriteWordPageTemplate from "../../template/FavoriteWordPageTemplate";

type Props = {
  wordData: Word[];
};

const FavoriteWordPage = (props: Props) => {
  const { wordData } = props;
  const selector = useSelector((state: RootState) => state);
  const favoriteWordsIds = addFavoriteWordsSelector(selector);

  const favoriteWords = wordData.filter(
    (word) => favoriteWordsIds.indexOf(word.questionID) !== -1
  );

  return <FavoriteWordPageTemplate favoriteWords={favoriteWords} />;
};

export async function getStaticProps() {
  const wordData = await getData("questionDataList");
  return {
    props: {
      wordData,
    },
  };
}

export default FavoriteWordPage;