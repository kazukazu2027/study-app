import React from "react";
import PageTitle from "../Title/PageTitle";
import Link from "next/dist/client/link";
import Image from "next/dist/client/image";

const WordPageHeader = () => {
  return (
    <div className="flex">
      <div className="">
        <PageTitle>用語一覧</PageTitle>
      </div>
      <div className="ml-auto flex">
        <div className="pr-4">
          <Link href={"AllWordPage"} passHref>
            <Image src={"/book.svg"} width={30} height={30} />
          </Link>
        </div>
        <div className="pr-4 pt-1">
          <Link href={"SearchWordPage"} passHref>
            <Image src={"/search_icon.svg"} width={30} height={23} />
          </Link>
        </div>
        <Link href={"FavoriteWordPage"} passHref>
          <Image src={"/heart.svg"} width={25} height={1} />
        </Link>
      </div>
    </div>
  );
};

export default WordPageHeader;
