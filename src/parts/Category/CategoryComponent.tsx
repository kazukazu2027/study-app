import React from "react";
import { useDispatch } from "react-redux";
import { getQuestionCategory } from "../../redux/action/questionAction";
import Image from "next/image";

type Props = {
  category: string;
  img: string;
  name: string;
};

const CategoryComponent = (props: Props) => {
  const { category, img, name } = props;
  const dispatch = useDispatch();
  const handleClickSkill = () => {
    dispatch(getQuestionCategory(category));
  };
  return (
    <a onClick={handleClickSkill}>
      <div className="border rounded-lg shadow">
        <div className="w-10/12 m-auto text-center">
          <div className="pt-3">
            <Image src={img} width={150} height={90} />
          </div>
          <div className="pb-5 font-bold">
            <p>{name}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CategoryComponent;
