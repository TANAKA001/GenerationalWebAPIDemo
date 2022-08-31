// components/Spinner/Spinner.tsx

import React, { FC } from "react";
import "./Spinner.style.scss";
import Icon from "../Icon";

export interface SpinnerProps {
  label?: string;
}

const defaultProps: SpinnerProps = {
  label: "Loading",
};

const Spinner: FC<SpinnerProps> = (props: SpinnerProps) => {
  props = { ...defaultProps, ...props };

  return (
    <div className={"spinner"} data-testid={"Spinner"}>
      <Icon icon={"loader"} /> {props.label}
    </div>
  );
};

export default Spinner;
