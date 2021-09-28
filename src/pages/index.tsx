import AllWord from "../components/TopPage/AllWord";
import BulletinBoard from "../components/TopPage/BulletinBoard";
import StudyOfWord from "../components/TopPage/StudyOfWord";
import Layout from "../layouts/Layout";


const IndexPage = () => (
  <Layout>
    <div className="pb-10 mx-3 ">
      <StudyOfWord />
      <AllWord />
      <BulletinBoard />
    </div>
  </Layout>
);

export default IndexPage;
