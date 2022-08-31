// components/InputSelect/InputSelect.tsx

import React, { FC } from "react";
import "./InputSelect.style.scss";
import InputWrapper from "../InputWrapper";
import { randomString } from "../../functions";

export interface InputSelectProps {
  id?: string;
  label?: string;
  srOnlyLabel?: boolean;
  moreInfo?: string;
  footnote?: string;
  theme?: string;
  required?: boolean;
  invalid?: boolean;
  invalidMessage?: string;
  prefixIcon?: string;
  placeholder?: string;
  autocomplete?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  maxLength?: number;
  value?: number | string;
  allowNull?: boolean;
  options: {
    label: string;
    value: string;
  }[];
  onValueChange: React.Dispatch<React.SetStateAction<string>>;
}

const defaultProps: InputSelectProps = {
  id: randomString(),
  allowNull: true,
  options: [],
  onValueChange: (v) => v,
};

const InputSelect: FC<InputSelectProps> = (props: InputSelectProps) => {
  props = { ...defaultProps, ...props };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    props.onValueChange(value);
  };

  return (
    <InputWrapper
      id={props.id}
      label={props.label}
      srOnlyLabel={props.srOnlyLabel}
      required={props.required}
      moreInfo={props.moreInfo}
      footnote={props.footnote}
      invalid={props.invalid}
      invalidMessage={props.invalidMessage}
    >
      <div className={`input-select ${props.invalid ? "is-invalid" : ""}`} data-testid={"InputSelect"}>
        <select
          id={props.id}
          className={`${props.invalid ? "is-invalid" : ""}`}
          value={props.value}
          onChange={handleChange}
        >
          {props.allowNull && <option disabled={props.required}>Choose One</option>}

          {props.options.map((option, index) => {
            return (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      </div>
    </InputWrapper>
  );
};

export default InputSelect;
