// InputRadioGroup.tsx

import React, { FC } from "react";
import "./InputRadioGroup.style.scss";
import { randomString } from "../../functions";
import InputWrapper from "../InputWrapper";
import InputRadio from "./InputRadio";

export interface RadioOption {
  id?: string;
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface InputRadioGroupProps {
  id?: string;
  groupName: string;
  label?: string;
  moreInfo?: string;
  srOnlyLabel?: boolean;
  footnote?: string;
  options?: RadioOption[];
  required?: boolean;
  invalid?: boolean;
  invalidMessage?: string;
  value?: string | number;
  onRadioChange: React.Dispatch<React.SetStateAction<string>>;
}

const defaultProps: InputRadioGroupProps = {
  id: randomString(),
  groupName: randomString(),
  options: [],
  required: false,
  onRadioChange: (v) => v,
};

const InputRadioGroup: FC<InputRadioGroupProps> = (props: InputRadioGroupProps) => {
  props = { ...defaultProps, ...props };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    props.onRadioChange(value);
  };

  const radioList = props.options?.map((option, index) => {
    return (
      <InputRadio
        key={index}
        id={option.id || randomString()}
        label={option.label}
        groupName={props.groupName}
        disabled={option.disabled}
        value={option.value}
        selected={props.value}
        onValueChange={handleChange}
      />
    );
  });

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
      <div className={`input-radio-group ${props.invalid ? "is-invalid" : ""}`} data-testid={"InputRadioGroup"}>
        {radioList}
      </div>
    </InputWrapper>
  );
};

export default InputRadioGroup;
