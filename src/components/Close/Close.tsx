// Close.tsx

import React, { FC } from "react";
import "./Close.style.scss";
import Icon from "../Icon";

export interface CloseProps {
  theme?: "default" | "primary" | "info" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

const defaultProps: CloseProps = {
  theme: "default",
  size: "md",
};

const Close: FC<CloseProps> = (props: CloseProps) => {
  props = { ...defaultProps, ...props };

  return (
    <button className={`close-btn ${props.theme} ${props.size}`} data-testid='Close' onClick={props.onClick}>
      <Icon icon={"close"} size={props.size} />
    </button>
  );
};

export default Close;
