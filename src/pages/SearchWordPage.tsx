import React, { useEffect, useState } from "react";
import firebase from "firebase";
import Layout from "./layouts/Layout";
import { getData } from "../functions/getData";
import CategoryWord from "./components/AllWordPage/CategoryWord";
import WordPageHeader from "./parts/Header/WordPageHeader";

const SearchWordPage = () => {
  const [wordData, setWordData] = useState<firebase.firestore.DocumentData[]>(
    []
  );
  const [searchWordData, setSearchWordData] = useState<
    firebase.firestore.DocumentData[]
  >([]);
  const [text, setText] = useState("");
  useEffect(() => {
    (async () => {
      const wordData = await getData("questionDataList");
      setWordData(wordData);
    })();
  }, []);

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
      <div className="bg-gray-200 min-h-screen px-3">
        <div className="py-4">
          <WordPageHeader />
        </div>
        <div className=" bg-white mb-3 rounded-md">
          <div className="w-full py-6">
            <input
              type="text"
              placeholder={"用語を入力"}
              className="block border-2 p-2 rounded-md w-10/12 m-auto"
              onChange={handleChange}
            />
          </div>
          {text ? (
            <CategoryWord data={searchWordData} />
          ) : (
            <CategoryWord data={wordData} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SearchWordPage;
