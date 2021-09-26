import React from "react";
import Card from "../../layouts/Card";
import Image from "next/image";
import Link from "next/link";
import TitleInCard from "../../parts/Card/TitleInCard";
import TextInCard from "../../parts/Card/TextInCard";
import Button from "../../parts/Button/Button";

const AllWord = () => {
  return (
    <div className="mt-10">
      <Card>
        <Image src={"/search.png"} width={360} height={300} />
        <TitleInCard>プログラミング用語一覧</TitleInCard>
        <div className="my-5">
          <TextInCard>
            このアプリ内に収録されている用語の一覧になります。検索機能もあるので、何かわからない用語があればぜひ調べてみてください。また、リスト機能もあるので、保存したい場合も積極的に活用してください。
          </TextInCard>
        </div>
        <Link href={"AllWordPage"}>
          <div className="text-center pb-8">
            <Button color={"bg-blue-500"}>見てみる</Button>
          </div>
        </Link>
      </Card>
    </div>
  );
};

export default AllWord;
