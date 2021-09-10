import Link from "next/link";
import React from "react";
import CategoryCard from "../../parts/Category/CategoryCard";

const Category = () => {
  return (
    <>
      <div className="py-4">
        <h2 className="text-lg">カテゴリ</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
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
              title={"git用語"}
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
