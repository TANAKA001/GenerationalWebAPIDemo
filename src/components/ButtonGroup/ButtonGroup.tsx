// components/ButtonGroup/ButtonGroup.tsx

import React, { FC } from "react";
import "./ButtonGroup.style.scss";

export interface ButtonGroupProps {
  id?: string;
  align?: "left" | "center" | "right";
  children?: React.ReactNode;
}

const defaultProps: ButtonGroupProps = {
  align: "left",
};

const ButtonGroup: FC<ButtonGroupProps> = (props: ButtonGroupProps) => {
  props = { ...defaultProps, ...props };

  return (
    <div id={props.id} className={"button-group"} data-testid={"ButtonGroup"}>
      <div className={`btn-row align-${props.align}`}>{props.children}</div>
    </div>
  );
};

export default ButtonGroup;
