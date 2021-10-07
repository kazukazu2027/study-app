import React from "react";
import CategoryCard from "./CategoryCard";

type Props = {
  category: string;
  img: string;
};

const CategoryComponent = (props: Props) => {
  const { category, img } = props;
  return (
    <CategoryCard
      src={img}
      width={150}
      height={90}
      category={category}
    />
  );
};

export default CategoryComponent;
