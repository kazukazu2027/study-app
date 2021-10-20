import React, { useEffect } from "react";
import Layout from "../layouts/Layout";
import Firebase from "firebase";
import { useDispatch } from "react-redux";
import { addUserID } from "../redux/action/usersAction";
import StudyOfWordCard from "../parts/Card/StudyOfWordCard";
import AllWordCard from "../components/TopPage/AllWord";
import BulletinBoardCard from "../components/TopPage/BulletinBoard";

const IndexPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const uid = Firebase.auth().currentUser?.uid;
    if (uid) {
      dispatch(addUserID(uid));
    }
  }, []);

  return (
    <Layout>
      <div className="pb-10 mx-3">
        <div className="mt-10">
          <StudyOfWordCard href="/question/QuestionMainPage" />
        </div>
        <AllWordCard />
        <BulletinBoardCard />
      </div>
    </Layout>
  );
};

export default IndexPage;
