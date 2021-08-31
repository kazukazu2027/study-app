import { useState } from "react";
import { Firebase } from "../lib/firebase";
import Layout from "./layouts/Layout";
import WordCard from "./parts/WordCard";
import "firebase/firestore";
import questionList from "../../data.json";

type questionList = {
  question: string;
  questionID: string;
  answerList: [
    {
      ID: number;
      body: string;
      check: boolean;
    },
    {
      ID: number;
      body: string;
      check: boolean;
    },
    {
      ID: number;
      body: string;
      check: boolean;
    },
    {
      ID: number;
      body: string;
      check: boolean;
    }
  ];
};

const StudyOfWordPage = () => {
  // const a = questionList.questionList.answerList.map((answer) => {});
  // const [choice, setChoice] = useState([]);
  // const onClick = async () => {
  //   const db = Firebase.firestore();
  //   const snapShot = await db.collection("choiceList").get();
  //   const list = [];
  //   snapShot.forEach((doc) => {
  //     list.push({
  //       listId: doc.id,
  //       ...doc.data(),
  //     });
  //   });
  //   console.log(list);
  //   console.log(questionList.questionList.question);
  // };
  return (
    <Layout>
      <div>
        <h3>エンジニアに必要なプログラミング用語を学ぶ</h3>
      </div>
      <WordCard href={"QuestionMainPage"}/>
    </Layout>
  );
};

export default StudyOfWordPage;
