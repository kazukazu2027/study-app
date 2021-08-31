import Link from "next/link";
import Card from "../layouts/Card";
import Image from "next/image";
import Button from "./Button";

interface Props {
  href: string;
}

const WordCard = (props: Props) => {
  const { href } = props;
  return (
    <div className="mt-10">
      <Card>
        <div className="">
          <Image src={"/word_study.png"} width={360} height={300} />
        </div>
        <div className="">
          <h2 className="text-2xl font-bold">プログラミング用語を学ぶ</h2>
          <p className="text-md my-5 ">
            プログラミングを学習するときに、わからない用語がたくさん出てきませんか？用語が分からなければ、当然学習もできません。しっかり学びましょう。
          </p>
          <Link href={href}>
            <div className="text-center pb-8">
              <Button text={"学習する"} color={"bg-blue-500"} />
            </div>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default WordCard;
