// InputFootnote.tsx

import React, { FC } from "react";
import "./InputFootnote.style.scss";

export interface InputFootnoteProps {
  children?: JSX.Element | JSX.Element[] | string | string[];
}

const InputFootnote: FC<InputFootnoteProps> = (props: InputFootnoteProps) => {
  return (
    <div className='input-footnote' data-testid='InputFootnote'>
      {props.children}
    </div>
  );
};

export default InputFootnote;
