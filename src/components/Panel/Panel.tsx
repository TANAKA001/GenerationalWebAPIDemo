// components/Panel/Panel.tsx

import React, { FC } from "react";
import "./Panel.style.scss";

export interface PanelProps {
  id?: string;
  theme?: "white" | "gray" | "transparent";
  children?: React.ReactNode;
}

const defaultProps: PanelProps = {};

const Panel: FC<PanelProps> = (props: PanelProps) => {
  props = { ...defaultProps, ...props };

  return (
    <div className={`panel ${props.theme}`} id={props.id} data-testid={"Panel"}>
      {props.children}
    </div>
  );
};

export default Panel;
