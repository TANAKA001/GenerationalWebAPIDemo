// InputTextarea.tsx

import React, { FC } from "react";
import "./InputTextarea.style.scss";
import { randomString } from "../../functions";
import InputWrapper from "../InputWrapper";

export interface InputTextareaProps {
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
  value: string;
  onValueChange: React.Dispatch<React.SetStateAction<InputTextareaProps["value"]>>;
}

const defaultProps: InputTextareaProps = {
  id: randomString(),
  invalidMessage: "This is required",
  value: "",
  onValueChange: (v) => v,
};

const InputTextarea: FC<InputTextareaProps> = (props: InputTextareaProps) => {
  props = { ...defaultProps, ...props };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      <div className='input-textarea' data-testid='InputTextarea'>
        <textarea
          id={props.id}
          className={`${props.invalid ? "is-invalid" : ""} ${props.prefixIcon ? "prefix" : ""}`}
          placeholder={props.placeholder}
          readOnly={props.readonly}
          autoComplete={props.autocomplete ? "on" : "off"}
          value={props.value}
          onChange={handleChange}
        />
      </div>
    </InputWrapper>
  );
};

export default InputTextarea;
