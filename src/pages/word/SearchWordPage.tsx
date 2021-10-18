import React, { useState } from "react";
import CategoryWord from "../../components/AllWordPage/CategoryWord";
import { getData } from "../../functions/getData";
import Layout from "../../layouts/Layout";
import WordPageHeader from "../../parts/Header/WordPageHeader";
import { WordData } from "../../types/wordTypes";

type Props = {
  wordData: WordData[];
};

const SearchWordPage = (props: Props) => {
  const { wordData } = props;

  const [searchWordData, setSearchWordData] = useState<WordData[]>([]);
  const [text, setText] = useState("");

  const handleChange = (e: any) => {
    const updateList = wordData.filter((data) => {
      return (
        data.question.toLowerCase().search(e.target.value.toLowerCase()) !== -1
      );
    });
    setSearchWordData(updateList);
    setText(e.target.value);
  };
  return (
    <Layout>
      <div className="bg-gray-200 min-h-screen px-3 pb-8 mt-4">
        <div className="py-4">
          <WordPageHeader />
        </div>
        <div className=" bg-white mb-3 rounded-md pb-4">
          <div className="py-6">
            <input
              type="text"
              placeholder={"用語を入力"}
              className="block border-2 p-2 rounded-md w-10/12 m-auto"
              onChange={handleChange}
            />
          </div>
          <div className="px-4">
            {text ? (
              <CategoryWord data={searchWordData} />
            ) : (
              <CategoryWord data={wordData} />
            )}
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

export default SearchWordPage;
