import Layout from "./layouts/Layout";
import StudyOfWord from "./components/TopPage/StudyOfWord";
import AllWord from "./components/TopPage/AllWord";
import AskQuestion from "./components/TopPage/AskQuestion";

const IndexPage = () => (
  <Layout>
    <div className="pb-10 mx-3 ">
      <StudyOfWord />
      <AllWord />
      <AskQuestion />
    </div>
  </Layout>
);

export default IndexPage;
