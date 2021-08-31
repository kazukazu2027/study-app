import React from "react";
import { useDispatch } from "react-redux";

type Props = {
  answer: {
    ID: string;
    body: string;
    check: boolean;
  };
  name: string;
};

const UncheckedRadioButton = (props: Props) => {
  const dispatch = useDispatch();

  const clickAnswer = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    dispatch(checkedAnswerString(event.target.value));
  };
  const handleCheck = () => {
    dispatch(checkedAnswer(true));
  };
  const { answer, name } = props;
  return (
    <label className="flex " key={answer.ID} onClick={clickAnswer}>
      <input
        type="radio"
        className="mt-1"
        value={answer.body}
        onClick={handleCheck}
        name={name}
      />
      <p className="pl-3">{answer.body}</p>
    </label>
  );
};

export default UncheckedRadioButton;
{
  /* <label
className="flex "
key={answer.ID}
onClick={clickAnswer}
>
<input
  type="radio"
  className="mt-1"
  value={answer.body}
  name={questionData[0].questionID}
  onClick={handleCheck}
/>
<p className="pl-3">{answer.body}</p>
</label> */
}
