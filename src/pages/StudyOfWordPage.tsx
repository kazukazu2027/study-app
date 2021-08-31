import Layout from "./layouts/Layout";
import WordCard from "./parts/WordCard";
import "firebase/firestore";


const StudyOfWordPage = () => {
  return (
    <Layout>
      <div>
        <h3>エンジニアに必要なプログラミング用語を学ぶ</h3>
      </div>
      <WordCard />
    </Layout>
  );
};

export default StudyOfWordPage;
