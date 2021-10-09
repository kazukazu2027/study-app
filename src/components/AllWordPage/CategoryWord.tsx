import React from "react";
import { Word } from "../../pages/word/AllWordPage";
import BottomBorder from "../../parts/Border/BottomBorder";
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
        return <WordParts data={word} key={word.questionID} />;
      })}
      <BottomBorder />
    </div>
  );
};
export default CategoryWord;
