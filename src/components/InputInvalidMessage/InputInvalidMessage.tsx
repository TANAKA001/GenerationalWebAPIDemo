// components/InputInvalidMessage/InputInvalidMessage.tsx

import React, { FC } from "react";
import "./InputInvalidMessage.style.scss";
import Icon from "../Icon";

export interface InputInvalidMessageProps {
  message?: string;
}

const defaultProps: InputInvalidMessageProps = {};

const InputInvalidMessage: FC<InputInvalidMessageProps> = (props: InputInvalidMessageProps) => {
  props = { ...defaultProps, ...props };

  return (
    <div className={"input-invalid-message"} data-testid={"InputInvalidMessage"}>
      <Icon icon={"warning"} size={"sm"} /> {props.message}
    </div>
  );
};

export default InputInvalidMessage;
