import React from "react";
import Card from "../../layouts/Card";
import Image from "next/image";
import Link from "next/link";
import TitleInCard from "./TitleInCard";
import TextInCard from "./TextInCard";
import SelectTheNumberOfQuestion from "../../components/QuestionExplanationPage/SelectTheNumberOfQuestion";
import Button from "../Button/Button";

type Props = {
  onClick: (event: any) => void;
  isChoice: boolean;
};

const QuestionCard = (props: Props) => {
  const { onClick, isChoice } = props;

  return (
    <Card>
      <Image src={"/studying.png"} width={360} height={240} />
      <div className="pt-5">
        <TitleInCard>プログラミング用語を学ぶ</TitleInCard>
      </div>
      <div className="py-5">
        <TextInCard>正しいと思う答えを4択の中から選んでください。</TextInCard>
      </div>
      <div className="pb-5">
        <SelectTheNumberOfQuestion handleClick={onClick} />
      </div>
      <Link href={isChoice ? "/question/QuestionPage" : ""}>
        <div className="pb-8 text-center">
          <Button color={isChoice ? "bg-blue-500" : "bg-gray-400"}>
            学習する
          </Button>
        </div>
      </Link>
    </Card>
  );
};

export default QuestionCard;
