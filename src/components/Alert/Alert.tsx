// components/Alert/Alert.tsx

import React, { FC } from "react";
import "./Alert.style.scss";
import Close from "../Close";

export interface AlertProps {
  theme?: "default" | "info" | "warning" | "danger" | "success";
  dismissible?: boolean;
  children?: React.ReactNode;
}

const defaultProps: AlertProps = {
  theme: "default",
  dismissible: true,
};

const Alert: FC<AlertProps> = (props: AlertProps) => {
  props = { ...defaultProps, ...props };

  return (
    <div className={`alert ${props.theme} ${props.dismissible ? "dismissible" : ""}`} data-testid={"Alert"}>
      {props.children}
      {props.dismissible && <Close theme={props.theme} />}
    </div>
  );
};

export default Alert;
