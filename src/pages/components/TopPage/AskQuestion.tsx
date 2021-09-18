import React from "react";
import Card from "../../layouts/Card";
import Image from "next/dist/client/image";
import TitleInCard from "../../parts/Card/TitleInCard";
import TextInCard from "../../parts/Card/TextInCard";
import Link from "next/dist/client/link";
import Button from "../../parts/Button/Button";

const AskQuestion = () => {
  return (
    <div className="mt-10">
      <Card>
        <Image src={"/question.png"} width={360} height={250} />
        <TitleInCard>掲示板</TitleInCard>
        <div className="my-5">
          <TextInCard>
            このページでは、さまざまなことを質問することができます。もし、学習中に何かわからないことがあれば、積極的に質問をしましょう！！
          </TextInCard>
        </div>
        <Link href={"ChatPage"}>
          <div className="text-center pb-8">
            <Button color={"bg-blue-500"}>掲示板を見てみる</Button>
          </div>
        </Link>
      </Card>
    </div>
  );
};

export default AskQuestion;