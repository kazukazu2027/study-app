import React, { useEffect } from "react";
import AllWord from "../components/TopPage/AllWord";
import BulletinBoard from "../components/TopPage/BulletinBoard";
import StudyOfWord from "../components/TopPage/StudyOfWord";
import Layout from "../layouts/Layout";
import Firebase from "firebase";
import { useDispatch } from "react-redux";
import { addUserID } from "../redux/action/usersAction";

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
      <div className="pb-10 mx-3 ">
        <StudyOfWord />
        <AllWord />
        <BulletinBoard />
      </div>
    </Layout>
  );
};

export default IndexPage;
