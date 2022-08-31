// InputLabel.tsx

import React, { FC } from "react";
import "./InputLabel.style.scss";
import Tooltip from "../Tooltip";

export interface InputLabelProps {
  required?: boolean;
  for?: string;
  srOnlyLabel?: boolean;
  moreInfo?: string;
  children?: JSX.Element | JSX.Element[] | string | string[];
}

const InputLabel: FC<InputLabelProps> = (props: InputLabelProps) => {
  return (
    <label
      className={`input-label ${props.required && "required"} ${props.srOnlyLabel && "sr-only"}`}
      htmlFor={props.for}
      data-testid='InputLabel'
    >
      {props.children}
      {props.moreInfo && <Tooltip tip={props.moreInfo} />}
    </label>
  );
};

export default InputLabel;
