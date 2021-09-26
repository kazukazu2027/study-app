import Link from "next/link";
import React from "react";
import CategoryComponent from "../../parts/Category/CategoryComponent";
import SubTitle from "../../parts/Title/SubTitle";

const Category = () => {
  return (
    <>
      <div className="py-4">
        <SubTitle>カテゴリ</SubTitle>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Link href={"CategoryQuestionPage"} passHref>
          <a>
            <CategoryComponent
              category={"言語"}
              src="/programmingLanguage.png"
            />
          </a>
        </Link>
        <Link href={"CategoryQuestionPage"} passHref>
          <a>
            <CategoryComponent category={"職業"} src="/work.svg" />
          </a>
        </Link>
        <Link href={"CategoryQuestionPage"} passHref>
          <a>
            <CategoryComponent
              category={"ネットワーク関連"}
              src="/network.svg"
            />
          </a>
        </Link>
        <Link href={"CategoryQuestionPage"} passHref>
          <a>
            <CategoryComponent category={"git用語"} src="/git.svg" />
          </a>
        </Link>
      </div>
    </>
  );
};

export default Category;
