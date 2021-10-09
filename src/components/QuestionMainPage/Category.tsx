import Link from "next/link";
import React from "react";
import CategoryComponent from "../../parts/Category/CategoryComponent";
import SubTitle from "../../parts/Title/SubTitle";

const Category = () => {
  const categoryList = [
    {
      category: "skill",
      name: "言語",
      img: "/programmingLanguage.png",
    },
    {
      category: "work",
      img: "/work.svg",
      name: "職業",
    },
    {
      category: "network",
      img: "/network.svg",
      name: "ネットワーク言語",
    },
    {
      category: "git",
      img: "/git.svg",
      name: "git用語",
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
                <CategoryComponent category={list.category} img={list.img} name={list.name} />
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Category;
