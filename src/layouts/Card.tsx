import React from "react";
import { LayoutProps } from "./Layout";

const Card = (props: LayoutProps) => {
    const {children} = props
  return (
    <div className="border rounded-lg shadow">
      <div className=" w-10/12 m-auto ">
        {children}
      </div>
    </div>
  );
};

export default Card;
