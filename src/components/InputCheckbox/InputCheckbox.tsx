import React from "react";
import "./InputCheckbox.scss";
import { randomString } from "../../functions";

export interface InputCheckboxProps {
  id?: string;
  label?: string;
  disabled?: boolean;
  isChecked?: boolean;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const defaultProps: InputCheckboxProps = {
  id: randomString(),
  disabled: false,
  isChecked: false,
};

const InputCheckbox: React.FC<InputCheckboxProps> = (props: InputCheckboxProps) => {
  props = { ...defaultProps, ...props };

  return (
    <div className='checkbox'>
      <input
        type={"checkbox"}
        id={props.id}
        name={props.id}
        disabled={props.disabled}
        checked={props.isChecked}
        onChange={props.handleChange}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

export default InputCheckbox;
