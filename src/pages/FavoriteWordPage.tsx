import React from "react";
import { useSelector } from "react-redux";
import CategoryWord from "../components/AllWordPage/CategoryWord";
import { getData } from "../functions/getData";
import Layout from "../layouts/Layout";
import WordPageHeader from "../parts/Header/WordPageHeader";
import { addFavoriteWordsSelector } from "../redux/selector/favoriteSelector";
import { RootState } from "../redux/store";
import { Word } from "./AllWordPage";

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

  return (
    <Layout>
      <div className="bg-gray-200 min-h-screen px-3 mt-4">
        <div className="py-4">
          <WordPageHeader />
        </div>
        <div className="bg-white mb-3 pb-6 rounded-md">
          <div className="px-4">
            <CategoryWord title={"リスト"} data={favoriteWords} />
          </div>
        </div>
      </div>
    </Layout>
  );
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
