import React, { useEffect, useState } from "react";
import { getData } from "../functions/getData";
import Layout from "./layouts/Layout";
import CategoryWord from "./components/AllWordPage/CategoryWord";
import WordPageHeader from "./parts/Header/WordPageHeader";

export type Word = {
  answerList: { body: string; check: boolean };
  category: string;
  explanation: string;
  question: string;
  questionID: string;
};

type Props = {
  skillWord: Word[];
  gitWord: Word[];
  workWord: Word[];
  networkWord: Word[];
};

const AllWordPage = (props: Props) => {
  const { skillWord, gitWord, workWord, networkWord } = props;
  console.log(skillWord);

  return (
    <Layout>
      <div className="bg-gray-200 pb-8 mt-4 px-3">
        <div className="py-4">
          <WordPageHeader />
        </div>
        <div className="bg-white mb-3 pb-6 rounded-md">
          <div className="px-4">
            {skillWord && gitWord && (
              <>
                <CategoryWord title={"skill"} data={skillWord} />
                <CategoryWord title={"git"} data={gitWord} />
                <CategoryWord title={"職業"} data={workWord} />
                <CategoryWord title={"ネットワーク関連"} data={networkWord} />
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
  const workWord = await wordData.filter((word) => word.category === "work");
  const networkWord = await wordData.filter(
    (word) => word.category === "network"
  );
  return {
    props: {
      skillWord,
      gitWord,
      workWord,
      networkWord,
    },
  };
}

export default AllWordPage;
