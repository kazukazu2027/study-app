import React, { useState } from "react";
import Image from "next/image";
import firebase from "firebase";

type Props = {
  data: firebase.firestore.DocumentData;
};

const WordParts = (props: Props) => {
  const { data } = props;
  const [displayExplanation, setDisplayExplanation] = useState(false);

  const handleExplanation = () => {
    setDisplayExplanation(!displayExplanation);
  };
  return (
    <div>
      <a className="border-t-2 flex px-2" onClick={handleExplanation}>
        <Image src={"/bookmark.svg"} width={18} height={40} />
        <a className="pt-2 pl-4 no-underline">
          <p>{data.question}</p>
        </a>
        <p className="ml-auto pt-2">＋</p>
      </a>
      {displayExplanation && (
        <div className={"bg-gray-100 px-4 py-2"}>
          <p>{data.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default WordParts;
