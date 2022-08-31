import React from "react";
import "./Row.scss";

export type RowProps = {
  children?: JSX.Element | JSX.Element[] | string | string[];
};

const Row: React.FC<RowProps> = ({ children }) => {
  return <div className={`row`}>{children}</div>;
};

export default Row;
