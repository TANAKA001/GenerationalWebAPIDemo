// components/Toast/Toast.tsx

import React, { FC, useEffect } from "react";
import "./Toast.style.scss";
import Close from "../Close";
import Icon from "../Icon";
import { IconProps } from "../Icon/Icon";

export interface ToastProps {
  id?: string;
  type?: "warning" | "success" | "error" | "info";
  message?: string;
  duration?: number;
  destroy?: () => void;
}

const defaultProps: ToastProps = {
  type: "info",
  duration: 10000,
  destroy: () => null,
};

const Toast: FC<ToastProps> = (props: ToastProps) => {
  props = { ...defaultProps, ...props };

  useEffect(() => {
    if (!props.duration) return;

    const timer = setTimeout(() => {
      props.destroy && props.destroy();
    }, props.duration);

    return () => clearTimeout(timer);
  }, [props]);

  const getIcon = (): IconProps["icon"] => {
    const iconLookup = {
      warning: "warning",
      success: "circle-check",
      error: "error",
      info: "info",
    };
    return iconLookup[props.type || "info"] as IconProps["icon"];
  };

  return (
    <div className={`toast ${props.type}`} data-testid={"Toast"}>
      <div className={"toast-icon"}>
        <Icon icon={getIcon()} theme={props.type} size={"lg"} />
      </div>
      <div className={"toast-body"}>
        <h6 className={"toast-heading"}>{props.type}</h6>
        <p className={"no-margin"}>{props.message}</p>
      </div>
      <div className={"toast-close"}>
        <Close size={"lg"} onClick={props.destroy} />
      </div>
    </div>
  );
};

export default Toast;
