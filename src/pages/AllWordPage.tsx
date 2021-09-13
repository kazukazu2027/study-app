import React, { useEffect, useState } from "react";
import { getData } from "../functions/getData";
import Layout from "./layouts/Layout";
import firebase from "firebase";
import CategoryWord from "./components/AllWordPage/CategoryWord";
import Link from "next/dist/client/link";
import PageTitle from "./parts/Title/PageTitle";

const AllWordPage = () => {
  const [skillData, setSkillData] = useState<firebase.firestore.DocumentData[]>(
    []
  );
  const [gitData, setGitData] = useState<firebase.firestore.DocumentData[]>([]);

  useEffect(() => {
    (async () => {
      const wordData = await getData("questionDataList");
      const skillWord = wordData.filter((word) => word.category === "skill");
      const gitWord = wordData.filter((word) => word.category === "git");
      setSkillData(skillWord);
      setGitData(gitWord);
    })();
  }, []);
  return (
    <Layout>
      <div className="bg-gray-200">
        <PageTitle>用語一覧</PageTitle>
        <Link href={"SearchWordPage"} passHref>
          <a href="">用語検索</a>
        </Link>
        <div className="bg-white m-3 rounded-md">
          <div className="px-4">
            <CategoryWord title={"skill"} data={skillData} />
            <CategoryWord title={"git"} data={gitData} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AllWordPage;
