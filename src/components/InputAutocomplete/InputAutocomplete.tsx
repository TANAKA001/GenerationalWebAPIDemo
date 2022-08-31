// components/InputAutocomplete/InputAutocomplete.tsx

import React, { FC } from "react";
import Select from "react-select";
import "./InputAutocomplete.style.scss";
import { randomString } from "../../functions";
import InputWrapper from "../InputWrapper";

export interface InputAutocompleteProps {
  id?: string;
  label?: string;
  srOnlyLabel?: boolean;
  moreInfo?: string;
  footnote?: string;
  theme?: "default" | "gray";
  required?: boolean;
  invalid?: boolean;
  invalidMessage?: string;
  placeholder?: string;
  readonly?: boolean;
  isMulti?: boolean;
  options?;
  value: number | string;
  onValueChange: React.Dispatch<React.SetStateAction<InputAutocompleteProps["value"]>>;
}

const defaultProps: InputAutocompleteProps = {
  id: randomString(),
  invalidMessage: "This is required",
  value: "",
  isMulti: false,
  onValueChange: (v) => v,
};

const InputAutocomplete: FC<InputAutocompleteProps> = (props: InputAutocompleteProps) => {
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
      <div className={"input-autocomplete"} data-testid={"InputAutocomplete"}>
        <Select isMulti={props.isMulti} options={props.options} value={props.value} />
      </div>
    </InputWrapper>
  );
};

export default InputAutocomplete;
