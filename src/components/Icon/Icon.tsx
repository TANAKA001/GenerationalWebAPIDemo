// components/Icon/Icon.tsx

import React, { FC } from "react";
import "./Icon.style.scss";
import { Icons, IconOptions } from "./Icons.d";

export interface IconProps {
  id?: string;
  icon: IconOptions;
  theme?: "default" | "danger" | "info" | "primary" | "success" | "error" | "warning" | "tooltip";
  viewBox?: string;
  size?: "xs" | "sm" | "md" | "lg";
  title?: string;
  role?: "icon" | "graphic" | "img";
}

const defaultProps: IconProps = {
  icon: "circle-empty",
  theme: "default",
  size: "md",
  viewBox: "0 0 24 24",
  role: "icon",
};

const Icon: FC<IconProps> = (props: IconProps) => {
  props = { ...defaultProps, ...props };

  const styleString = { height: props.size + "px", width: props.size + "px" };

  return (
    <div className={`icon ${props.theme} ${props.size}`} id={props.id} style={styleString} data-testid={"Icon"}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={"100%"}
        height={"100%"}
        viewBox={"0 0 24 24"}
        fill='none'
        role={props.role}
      >
        {props.title && <title>{props.title}</title>}

        {Icons[props.icon || "empty"]}
      </svg>
    </div>
  );
};

export default Icon;
