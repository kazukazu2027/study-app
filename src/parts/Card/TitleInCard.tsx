import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const TitleInCard = (props: Props) => {
  const { children } = props;
  return <h2 className="text-2xl font-bold">{children}</h2>;
};

export default TitleInCard;
