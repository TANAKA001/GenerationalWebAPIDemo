// InputToggle.tsx

import React, { FC } from "react";
import "./InputToggle.style.scss";
import { randomString } from "../../functions";

export interface InputToggleProps {
  id?: string;
  label?: string;
  srOnlyLabel?: boolean;
  disabled?: boolean;
  trueLabel?: string;
  falseLabel?: string;
  minWidth?: number;
  isChecked: boolean;
  onValueChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultProps: InputToggleProps = {
  id: randomString(),
  srOnlyLabel: false,
  disabled: false,
  isChecked: false,
  trueLabel: "",
  falseLabel: "",
  onValueChange: (v) => v,
};

const InputToggle: FC<InputToggleProps> = (props: InputToggleProps) => {
  props = { ...defaultProps, ...props };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;
    props.onValueChange(value);
  };

  return (
    <div className='input-toggle' data-testid='InputToggle'>
      <input
        type={"checkbox"}
        id={props.id}
        name={props.id}
        disabled={props.disabled}
        checked={props.isChecked}
        onChange={handleChange}
      />

      <label htmlFor={props.id}>
        <span className='toggle' aria-hidden='true'>
          <span className='toggle-inner' data-label-true={props.trueLabel} data-label-false={props.falseLabel}></span>
          <span className='toggle-switch'></span>
        </span>
        <span className={`toggle-label ${props.srOnlyLabel ? "sr-only" : ""}`}>{props.label}</span>
      </label>
    </div>
  );
};

export default InputToggle;
