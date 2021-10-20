import Link from "next/link";
import Card from "../../layouts/Card";
import Image from "next/image";
import Button from "../Button/Button";
import TitleInCard from "./TitleInCard";
import TextInCard from "./TextInCard";

type Props = {
  href: string;
};

const StudyOfWordCard = (props: Props) => {
  const { href } = props;
  return (
    <Card>
      <Image src={"/word_study.png"} width={360} height={300} />
      <TitleInCard>プログラミング用語を学ぶ</TitleInCard>
      <div className="my-5">
        <TextInCard>
          プログラミングを学習するときに、わからない用語がたくさん出てきませんか？用語が分からなければ、当然学習もできません。しっかり学びましょう。
        </TextInCard>
      </div>
      <Link href={href}>
        <div className="text-center pb-8">
          <Button color={"bg-blue-500"}>学習する</Button>
        </div>
      </Link>
    </Card>
  );
};

export default StudyOfWordCard;
