import Link from "next/link";
import React from "react";
import Layout from "./layouts/Layout";
import Image from "next/image";
import Card from "./layouts/Card";
import Button from "./parts/Button";
import Category from "./components/QuestionMainPage/Category";
import TitleInCard from "./parts/Card/TitleInCard";
import TextInCard from "./parts/Card/TextInCard";

const QuestionMainPage = () => {
  return (
    <Layout>
      <div className="pt-10">
        <Card>
          <Image src={"/studying.png"} width={360} height={240} />
          <TitleInCard>プログラミング用語を学ぶ</TitleInCard>
          <div className="my-5">
            <TextInCard>
              IT用語を覚えておけば、さまざまな場面で役立てることができます。また、エンジニアとの会話にもバッチリついていけます。これからIT業界を目指す方は、必須なので、しっかり学習しましょう。
            </TextInCard>
          </div>
          <Link href={"QuestionExplanationPage"}>
            <div className="pb-8 text-center">
              <Button color={"bg-blue-500"} text={"学習する"} />
            </div>
          </Link>
        </Card>
        <Category />
      </div>
    </Layout>
  );
};

export default QuestionMainPage;
