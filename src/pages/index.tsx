import Layout from "./layouts/Layout";
import StudyOfWord from "./components/TopPage/StudyOfWord";
import AllWord from "./components/TopPage/AllWord";

const IndexPage = () => (
  <Layout>
    <div className="mb-10 mx-3">
      <StudyOfWord />
      <AllWord />
    </div>
  </Layout>
);

export default IndexPage;
