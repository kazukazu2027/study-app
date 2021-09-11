import Link from "next/link";
import React from "react";
import CategoryCard from "../../parts/Category/CategoryCard";
import SubTitle from "../../parts/Title/SubTitle";

const Category = () => {
  return (
    <>
      <div className="py-4">
        <SubTitle>カテゴリ</SubTitle>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Link href={"CategoryQuestionPage"}>
          <div>
            <CategoryCard
              src={"/programmingLanguage.png"}
              width={150}
              height={90}
              title={"言語"}
              category={"言語"}
            />
          </div>
        </Link>
        <Link href={"CategoryQuestionPage"}>
          <div>
            <CategoryCard
              src={"/programmingLanguage.png"}
              width={150}
              height={90}
              title={"git用語"}
              category={"git用語"}
            />
          </div>
        </Link>
        <Link href={"QuestionExplanationPage"}>
          <div>
            <CategoryCard
              src={"/programmingLanguage.png"}
              width={150}
              height={90}
              title={"言語"}
            />
          </div>
        </Link>
        <Link href={"QuestionExplanationPage"}>
          <div>
            <CategoryCard
              src={"/programmingLanguage.png"}
              width={150}
              height={90}
              title={"言語"}
            />
          </div>
        </Link>
        <Link href={"QuestionExplanationPage"}>
          <div>
            <CategoryCard
              src={"/programmingLanguage.png"}
              width={150}
              height={90}
              title={"言語"}
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Category;
