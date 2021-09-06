import Image from "next/image";
import React from "react";

type Props = {
  src: string;
  width: number;
  height: number;
  title: string;
};

const CategoryCard = (props :Props) => {
    const {src, width, height, title} = props
  return (
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
  );
};

export default CategoryCard;
