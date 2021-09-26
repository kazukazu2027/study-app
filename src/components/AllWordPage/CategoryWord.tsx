import React from "react";
import { Word } from "../../pages/AllWordPage";
import WordParts from "../../parts/WordParts/WordParts";

type Props = {
  title?: string;
  data: Word[];
};

const CategoryWord = (props: Props) => {
  const { title, data } = props;

  return (
    <div>
      {title && <p className="font-bold py-2 text-2xl">{title}</p>}
      {data.map((word) => {
        return <WordParts data={word} key={word.question} />;
      })}
      <div className=" w-full bg-gray-200 h-border"></div>
    </div>
  );
};
export default CategoryWord;
