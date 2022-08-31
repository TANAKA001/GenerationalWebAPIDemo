// components/Blockquote/Blockquote.tsx

import React, { FC } from "react";
import "./Blockquote.style.scss";

export interface BlockquoteProps {
  id?: string;
  cite?: string;
  children?: React.ReactNode;
}

const defaultProps: BlockquoteProps = {};

const Blockquote: FC<BlockquoteProps> = (props: BlockquoteProps) => {
  props = { ...defaultProps, ...props };

  return (
    <div id={props.id} className={"blockquote"} data-testid={"Blockquote"}>
      <blockquote cite={`${props.cite}`}>
        {props.children}
        {props.cite && <cite>{props.cite}</cite>}
      </blockquote>
    </div>
  );
};

export default Blockquote;
