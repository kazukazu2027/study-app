import React from "react";
import { getData } from "../../functions/getData";
import AllWordPageTemplate from "../../template/AllWordPageTemplate";
import { WordData } from "../../types/wordTypes";

type Props = {
  skillWord: WordData[];
  gitWord: WordData[];
  workWord: WordData[];
  networkWord: WordData[];
};

const AllWordPage = (props: Props) => {
  const { skillWord, gitWord, workWord, networkWord } = props;

  return (
    <AllWordPageTemplate
      skillWord={skillWord}
      gitWord={gitWord}
      workWord={workWord}
      networkWord={networkWord}
    />
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
