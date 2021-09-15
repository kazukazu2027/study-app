import React, { useState } from "react";
import firebase from "firebase";
import WordParts from "../../parts/WordParts/WordParts";

type Props = {
  title?: string;
  data: firebase.firestore.DocumentData[];
};

const CategoryWord = (props: Props) => {
  const { title, data } = props;

  return (
    <div>
      {title && <p className="font-bold py-2 text-2xl">{title}</p>}
      {data.map((word) => {
        return <WordParts data={word} />;
      })}
      <div className=" w-full bg-gray-200 h-0.5"></div>
    </div>
  );
};
export default CategoryWord;
