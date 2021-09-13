import React, { useState } from "react";
import firebase from "firebase";
import Image from "next/image";
import SubTitle from "../../parts/Title/SubTitle";
import WordParts from "../../parts/WordParts/WordParts";

type Props = {
  title?: string;
  data: firebase.firestore.DocumentData[];
};

const CategoryWord = (props: Props) => {
  const { title, data } = props;

  return (
    <div>
      {title && <p className="font-bold text-2xl py-2">{title}</p>}
      {data.map((word) => {
        return <WordParts data={word} />;
      })}
      <div className=" w-full bg-gray-200 h-0.5"></div>
    </div>
  );
};
export default CategoryWord;
