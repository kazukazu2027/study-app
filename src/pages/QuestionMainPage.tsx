import Link from "next/link";
import React from "react";
import Layout from "./layouts/Layout";
import Image from "next/image";
import Card from "./layouts/Card";
import Button from "./parts/Button";
import Category from "./components/QuestionMainPage/Category";

const QuestionMainPage = () => {
  return (
    <Layout>
      <div className="pt-10">
        <Card>
          <div className="">
            <div>
              <Image src={"/studying.png"} width={360} height={240} />
            </div>
            <div className="">
              <h2 className="text-2xl">プログラミング用語を学ぶ</h2>
            </div>
            <div className="py-5">
              <p>
                これから、問題が１０問表示されます。
                正しいと思う答えを4択の中から選んでください。
              </p>
            </div>
            <Link href={"QuestionExplanationPage"}>
              <div className="pb-8 text-center">
                <Button color={"bg-blue-500"} text={"学習する"} />
              </div>
            </Link>
          </div>
        </Card>
        <Category />
      </div>
    </Layout>
  );
};

export default QuestionMainPage;
