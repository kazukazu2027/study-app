import Link from "next/link";
import Card from "../../layouts/Card";
import Image from "next/image";
import Button from "../../parts/Button/Button";
import { firebaseConfig } from "../../../Firebase/firebase";
import TitleInCard from "../../parts/Card/TitleInCard";
import TextInCard from "../../parts/Card/TextInCard";

const StudyOfWord = () => {
  return (
    <div className="mt-10">
      <Card>
        <Image src={"/word_study.png"} width={360} height={300} />
        <TitleInCard>プログラミング用語を学ぶ</TitleInCard>
        <div className="my-5">
          <TextInCard>
            プログラミングを学習するときに、わからない用語がたくさん出てきませんか？用語が分からなければ、当然学習もできません。しっかり学びましょう。
          </TextInCard>
        </div>
        <Link href={"QuestionMainPage"}>
          <div className="text-center pb-8">
            <Button text={"学習する"} color={"bg-blue-500"} />
          </div>
        </Link>
      </Card>
    </div>
  );
};

export default StudyOfWord;
