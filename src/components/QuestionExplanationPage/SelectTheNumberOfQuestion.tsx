import React from "react";

type Props = {
  handleClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
};

const SelectTheNumberOfQuestion = (props: Props) => {
  const { handleClick } = props;
  return (
    <>
      <p>問題数を選んでください</p>
      <div className="flex justify-between w-3/4 m-auto">
        <label className="my-2 mr-4">
          <input
            id="answerRadio"
            type="radio"
            className="mt-4 mr-2 "
            value={3}
            onClick={handleClick}
            name={"問題数"}
          />
          <span>3問</span>
        </label>
        <label className="my-2 mr-4">
          <input
            id="answerRadio"
            type="radio"
            className="mt-4 mr-2 "
            value={7}
            onClick={handleClick}
            name={"問題数"}
          />
          <span>7問</span>
        </label>
        <label className="my-2">
          <input
            id="answerRadio"
            type="radio"
            className="mt-4 mr-2 "
            value={10}
            onClick={handleClick}
            name={"問題数"}
          />
          <span>10問</span>
        </label>
      </div>
    </>
  );
};

export default SelectTheNumberOfQuestion;
