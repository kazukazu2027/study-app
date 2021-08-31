import React from "react";

type Props = {
  color: string;
  text: string;
};

const Button = (props: Props) => {
  const { color, text } = props;
  return (
    <button className={`${color} text-white font-bold py-2 px-12 rounded`}>
      {text}
    </button>
  );
};

export default Button;
