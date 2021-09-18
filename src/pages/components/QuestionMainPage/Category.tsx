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
          <>
            <CategoryComponent category={"言語"} />
          </>
        </Link>
        <Link href={"CategoryQuestionPage"} passHref>
          <>
            <CategoryComponent category={"git用語"} />
          </>
        </Link>
        <Link href={"QuestionExplanationPage"} passHref>
          <>
            <CategoryComponent category={"言語"} />
          </>
        </Link>
        <Link href={"QuestionExplanationPage"} passHref>
          <>
            <CategoryComponent category={"言語"} />
          </>
        </Link>
        <Link href={"QuestionExplanationPage"} passHref>
          <>
            <CategoryComponent category={"言語"} />
          </>
        </Link>
      </div>
    </>
  );
};

export default Category;
