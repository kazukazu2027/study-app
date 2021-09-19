import React from "react";

type Props = {
  color: string;
  children: string;
  onClick?: () => void;
};

const Button = (props: Props) => {
  const { color, children, onClick } = props;
  return (
    <button className={`${color} text-white font-bold py-2 px-12 rounded`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
