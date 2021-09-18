import React, { useEffect, useState } from "react";
import { getData } from "../functions/getData";
import Layout from "./layouts/Layout";
import firebase from "firebase";
import CategoryWord from "./components/AllWordPage/CategoryWord";
import WordPageHeader from "./parts/Header/WordPageHeader";

type Props = {
  skillWord: firebase.firestore.DocumentData[];
  gitWord: firebase.firestore.DocumentData[];
};

const AllWordPage = (props: Props) => {
  const { skillWord, gitWord } = props;

  return (
    <Layout>
      <div className="bg-gray-200 pb-8 px-3">
        <div className="py-4">
          <WordPageHeader />
        </div>
        <div className="bg-white mb-3 pb-6 rounded-md">
          <div className="px-4">
            {skillWord && gitWord && (
              <>
                <CategoryWord title={"skill"} data={skillWord} />
                <CategoryWord title={"git"} data={gitWord} />
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const wordData = await getData("questionDataList");
  const skillWord = await wordData.filter((word) => word.category === "skill");
  const gitWord = await wordData.filter((word) => word.category === "git");
  return {
    props: {
      skillWord,
      gitWord,
    },
  };
}

export default AllWordPage;
