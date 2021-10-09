import Link from "next/link";
import React from "react";
import CategoryComponent from "../../parts/Category/CategoryComponent";
import SubTitle from "../../parts/Title/SubTitle";

const Category = () => {
  const categoryList = [
    {
      category: "言語",
      img: "/programmingLanguage.png",
    },
    {
      category: "職業",
      img: "/work.svg",
    },
    {
      category: "ネットワーク関連",
      img: "/network.svg",
    },
    {
      category: "git用語",
      img: "/git.svg",
    },
  ];

  return (
    <>
      <div className="py-4">
        <SubTitle>カテゴリ</SubTitle>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {categoryList.map((list) => {
          return (
            <Link href={"/question/CategoryQuestionPage"} passHref>
              <a>
                <CategoryComponent category={list.category} img={list.img} />
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Category;
