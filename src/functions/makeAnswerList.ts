import { shuffle } from "./Shuffle";
import firebase from "firebase";
import { AnswerList } from "../types/questionTypes";

export const makeAnswerList = (
  answerData: firebase.firestore.DocumentData[],
  questionDataList: firebase.firestore.DocumentData,
  questionNumber: number
) => {
  // 答えのリストの中から正解の答えを除外する
  const filterAnswerData = answerData.filter((answer) => {
    return answer.body !== questionDataList[questionNumber].answerList.body;
  });
  // 不正解の答えのリストをシャッフルする
  const shuffleAnswerData = shuffle(filterAnswerData).slice(0, 3);
  // シャッフルした不正解の答えのリストに正解の答えのリストを加える
  const answerList = [
    questionDataList[questionNumber].answerList,
    ...shuffleAnswerData,
  ];
  // 回答のリストをシャッフルする
  const shuffleAnswerList:AnswerList[] = shuffle(answerList);

  return shuffleAnswerList;
};
