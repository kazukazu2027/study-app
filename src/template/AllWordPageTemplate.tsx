import React from "react";
import Layout from "../layouts/Layout";
import WordPageHeader from "../parts/Header/WordPageHeader";
import CategoryWord from "../components/AllWordPage/CategoryWord";

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

const AllWordPageTemplate = (props: Props) => {
  const { skillWord, gitWord, workWord, networkWord } = props;

  const WordList = [
    { title: "skill", data: skillWord },
    { title: "ネットワーク関連", data: networkWord },
    { title: "職業", data: workWord },
    { title: "git", data: gitWord },
  ];

  return (
    <Layout>
      <div className="bg-gray-200 pb-8 mt-4 px-3">
        <div className="py-4">
          <WordPageHeader />
        </div>
        <div className="bg-white mb-3 pb-6 rounded-md">
          <div className="px-4">
            {WordList.map((word) => {
              return <CategoryWord title={word.title} data={word.data} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AllWordPageTemplate;
