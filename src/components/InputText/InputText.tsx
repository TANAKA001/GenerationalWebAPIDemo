import React from "react";
import "./InputText.style.scss";
import InputWrapper from "../InputWrapper";
import { randomString } from "../../functions";
import Icon from "../Icon";
import { IconOptions } from "../Icon/Icons.d";
import Close from "../Close";

export interface InputTextProps {
  id?: string;
  type?: string;
  label?: string;
  srOnlyLabel?: boolean;
  moreInfo?: string;
  footnote?: string;
  theme?: "default" | "gray";
  required?: boolean;
  invalid?: boolean;
  invalidMessage?: string;
  prefixIcon?: IconOptions;
  suffixIcon?: IconOptions;
  clearButton?: boolean;
  placeholder?: string;
  autocomplete?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  maxLength?: number;
  value: number | string;
  onValueChange: React.Dispatch<React.SetStateAction<InputTextProps["value"]>>;
}

const defaultProps: InputTextProps = {
  id: randomString(),
  type: "text",
  invalidMessage: "This is required",
  value: "",
  onValueChange: (v) => v,
};

const InputText: React.FC<InputTextProps> = (props: InputTextProps) => {
  props = { ...defaultProps, ...props };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <div className={`input-text theme-${props.theme}`}>
        <input
          type={props.type}
          id={props.id}
          className={`${props.invalid ? "is-invalid" : ""} ${props.prefixIcon ? "prefix" : ""} ${
            props.suffixIcon ? "suffix" : ""
          }`}
          placeholder={props.placeholder}
          readOnly={props.readonly}
          autoComplete={props.autocomplete ? "on" : "off"}
          value={props.value}
          onChange={handleChange}
        />

        {props.prefixIcon && (
          <div className={"input-prefix-icon"}>
            <Icon icon={props.prefixIcon} />
          </div>
        )}

        {props.suffixIcon && !props.clearButton && (
          <div className={"input-suffix-icon"}>
            <Icon icon={props.suffixIcon} />
          </div>
        )}

        {props.clearButton && props.value && (
          <div className={"clear-input"}>
            <Close onClick={() => props.onValueChange("")} />
          </div>
        )}
      </div>
    </InputWrapper>
  );
};

export default InputText;
