import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnswerList } from "../pages/components/QuestionPage/Question";
import { getCheckedAnswerIsCheckedSelector } from "../redux/QuestionList/answerSelector";
import {
  getQuestionDataListSelector,
  getQuestionNumberSelector,
} from "../redux/QuestionList/selector";
import { RootState } from "../redux/store";
import answerData from "../../skillAnswer.json";
import gitAnswerData from "../../gitAnswer.json";
import { shuffle } from "./Shuffle";
import {
  getAnswerList,
  getShuffleAnswerList,
} from "../redux/action/questionList";

const makeShuffleAnswerList = () => {
  const dispatch = useDispatch();

  const selector = useSelector((state: RootState) => state);
  const questionDataList = getQuestionDataListSelector(selector);
  const questionNumber = getQuestionNumberSelector(selector);
  const isChecked = getCheckedAnswerIsCheckedSelector(selector);

  switch (questionDataList[questionNumber].category) {
    case "skill":
      const trueAnswerText = questionDataList[questionNumber].answerList.body;

      const filterAnswerData = answerData.filter((answer) => {
        return answer.body !== trueAnswerText;
      });
      const shuffleAnswerData = shuffle(filterAnswerData);
      const sliceAnswerList = shuffleAnswerData.slice(0, 3);
      const answerList = [
        questionDataList[questionNumber].answerList,
        ...sliceAnswerList,
      ];

      const shuffleAnswerList = shuffle(answerList);
      dispatch(getShuffleAnswerList(shuffleAnswerList));
      dispatch(getAnswerList(shuffleAnswerList));
      return 'a'
    case "git":
      const gitTrueAnswerText =
        questionDataList[questionNumber].answerList.body;

      const gitFilterAnswerData = gitAnswerData.filter((answer) => {
        return answer.body !== gitTrueAnswerText;
      });
      const gitShuffleAnswerData = shuffle(gitFilterAnswerData);
      const gitSliceAnswerList = gitShuffleAnswerData.slice(0, 3);
      const gitAnswerList = [
        questionDataList[questionNumber].answerList,
        ...gitSliceAnswerList,
      ];

      const gitShuffleAnswerList = shuffle(gitAnswerList);
      dispatch(getShuffleAnswerList(gitShuffleAnswerList));
      dispatch(getAnswerList(gitShuffleAnswerList));
      return 'b'
  }
  return
};

export default makeShuffleAnswerList