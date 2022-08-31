// InputWrapper.tsx

import React, { FC } from "react";
import "./InputWrapper.style.scss";
import InputLabel from "../InputLabel";
import InputFootnote from "../InputFootnote";
import InputInvalidMessage from "../InputInvalidMessage";

export interface InputWrapperProps {
  id?: string;
  label?: string;
  required?: boolean;
  srOnlyLabel?: boolean;
  moreInfo?: string;
  footnote?: string;
  invalid?: boolean;
  invalidMessage?: string;
  children?: JSX.Element | JSX.Element[] | string | string[];
}

const InputWrapper: FC<InputWrapperProps> = (props: InputWrapperProps) => {
  return (
    <div id={props.id} className='input-wrapper' data-testid='InputWrapper'>
      <InputLabel required={props.required} for={props.id} srOnlyLabel={props.srOnlyLabel} moreInfo={props.moreInfo}>
        {props.label}
      </InputLabel>

      {props.children}

      {!!props.footnote && !props.invalid && <InputFootnote>{props.footnote}</InputFootnote>}

      {!!props.invalid && !!props.invalidMessage && <InputInvalidMessage message={props.invalidMessage} />}
    </div>
  );
};

export default InputWrapper;
