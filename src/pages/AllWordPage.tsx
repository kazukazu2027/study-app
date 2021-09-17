import React, { useEffect, useState } from "react";
import { getData } from "../functions/getData";
import Layout from "./layouts/Layout";
import firebase from "firebase";
import CategoryWord from "./components/AllWordPage/CategoryWord";
import WordPageHeader from "./parts/Header/WordPageHeader";

type Props = {
  wordData: firebase.firestore.DocumentData[];
};

const AllWordPage = (props: Props) => {
  const { wordData } = props;
  const [skillData, setSkillData] = useState<firebase.firestore.DocumentData[]>(
    []
  );
  const [gitData, setGitData] = useState<firebase.firestore.DocumentData[]>([]);

  useEffect(() => {
    (async () => {
      const skillWord = wordData.filter((word) => word.category === "skill");
      const gitWord = wordData.filter((word) => word.category === "git");
      setSkillData(skillWord);
      setGitData(gitWord);
    })();
  }, []);
  return (
    <Layout>
      <div className="bg-gray-200 pb-8 px-3">
        <div className="py-4">
          <WordPageHeader />
        </div>
        <div className="bg-white mb-3 pb-6 rounded-md">
          <div className="px-4">
            {skillData && gitData && (
              <>
                <CategoryWord title={"skill"} data={skillData} />
                <CategoryWord title={"git"} data={gitData} />
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
  return {
    props: {
      wordData,
    },
  };
}

export default AllWordPage;
