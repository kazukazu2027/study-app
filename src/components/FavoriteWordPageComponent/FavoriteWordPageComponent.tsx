import React from "react";
import Layout from "../../layouts/Layout";
import { Word } from "../../pages/AllWordPage";
import WordPageHeader from "../../parts/Header/WordPageHeader";
import CategoryWord from "../AllWordPage/CategoryWord";

type Props = {
  favoriteWords: Word[];
};

const FavoriteWordPageComponent = (props: Props) => {
  const { favoriteWords } = props;

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

export default FavoriteWordPageComponent;
