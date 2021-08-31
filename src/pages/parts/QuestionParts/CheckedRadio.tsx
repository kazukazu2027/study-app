import React from "react";

type Props = {
  answer: {
    ID: string;
    body: string;
    check: boolean;
  };
  name: string;
};

const CheckedRadio = (props: Props) => {
  const { answer, name } = props;
  return (
    <label className="flex" key={answer.ID}>
      <input
        type="radio"
        className="mt-1 "
        value={answer.body}
        disabled
        name={name}
      />
      <p className="pl-3 text-gray-400">{answer.body}</p>
    </label>
  );
};

export default CheckedRadio;
