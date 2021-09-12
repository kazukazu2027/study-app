import React from "react";
import CategoryCard from "./CategoryCard";

type Props = {
  category: string;
};

const CategoryComponent = (props: Props) => {
    const {category} = props
  return (
    <CategoryCard
      src={"/programmingLanguage.png"}
      width={150}
      height={90}
      category={category}
    />
  );
};

export default CategoryComponent;
