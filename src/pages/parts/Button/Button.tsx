import React from "react";

type Props = {
  color: string;
  children: string;
};

const Button = (props: Props) => {
  const { color, children } = props;
  return (
    <button className={`${color} text-white font-bold py-2 px-12 rounded`}>
      {children}
    </button>
  );
};

export default Button;
