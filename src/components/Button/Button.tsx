// Button.tsx

import React, { FC } from "react";
import "./Button.style.scss";
import {IconOptions} from "../Icon/Icons.d";
import Icon from "../Icon";

type ButtonThemeOptions =
  | "default"
  | "primary"
  | "primary-outline"
  | "secondary"
  | "info"
  | "success"
  | "success-outline"
  | "warning"
  | "danger"
  | "danger-outline"
  | "white"
  | "white-outline"
  | "link"
  | "control"
  | "control-black";

export type ButtonProps = {
  id?: string;
  theme?: ButtonThemeOptions;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  size?: "xs" | "sm" | "md" | "lg";
  width?: "narrow" | "standard" | "wide" | "block" | "square";
  icon?: IconOptions;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  children?: React.ReactNode;
};

const defaultProps: ButtonProps = {
  theme: "default",
  disabled: false,
  type: "button",
  size: "md",
  width: "standard",
  iconPosition: "left",
};

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  props = { ...defaultProps, ...props };

  return (
    <button
      id={props.id}
      className={`btn btn-${props.theme} btn-${props.size} btn-${props.width} ${props.disabled ? "disabled" : ""} ${props.icon ? "icon-" + props.iconPosition : ""}`}
      data-testid='Button'
      type={props.type}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.icon && (
        <Icon icon={props.icon} />
      )}
      {props.children}
    </button>
  );
};

export default Button;
