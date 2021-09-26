import React from "react";
import CategoryCard from "./CategoryCard";

type Props = {
  category: string;
  src: string;
};

const CategoryComponent = (props: Props) => {
  const { category, src } = props;
  return (
    <CategoryCard
      src={src}
      width={150}
      height={90}
      category={category}
    />
  );
};

export default CategoryComponent;
