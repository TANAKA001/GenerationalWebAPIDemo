// InputRadio.tsx

import React, { FC } from "react";
import "./InputRadio.style.scss";
import { randomString } from "../../functions";

export interface InputRadioProps {
  id: string;
  label?: string;
  disabled?: boolean;
  invalid?: boolean;
  groupName?: string;
  value?: string | number;
  selected?: string | number;
  onValueChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const defaultProps: InputRadioProps = {
  id: randomString(),
};

const InputRadio: FC<InputRadioProps> = (props: InputRadioProps) => {
  props = { ...defaultProps, ...props };

  return (
    <div className={"input-radio"} data-testid={"InputRadio"}>
      <input
        type='radio'
        id={props.id}
        className={`${props.invalid ? "is-invalid" : ""}`}
        disabled={props.disabled}
        name={props.groupName}
        value={props.value}
        defaultChecked={props.value === props.selected}
        onChange={props.onValueChange}
      />

      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

export default InputRadio;
