import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { getQuestionCategory } from "../../../redux/action/questionList";

type Props = {
  src: string;
  width: number;
  height: number;
  title: string;
  category?: string;
};

const CategoryCard = (props: Props) => {
  const { src, width, height, title, category } = props;
  const dispatch = useDispatch();
  const handleClickSkill = () => {
    category && dispatch(getQuestionCategory(category));
  };
  return (
    <a onClick={handleClickSkill}>
      <div className="border rounded-lg shadow">
        <div className="w-10/12 m-auto text-center">
          <div className="pt-3">
            <Image src={src} width={width} height={height} />
          </div>
          <div className="pb-5 font-bold">
            <p>{title}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CategoryCard;
