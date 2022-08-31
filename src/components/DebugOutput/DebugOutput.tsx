// components/DebugOutput/DebugOutput.tsx

import React, { FC } from "react";
import "./DebugOutput.style.scss";

export interface DebugOutputProps {
  children?: React.ReactNode;
}

const defaultProps: DebugOutputProps = {};

const DebugOutput: FC<DebugOutputProps> = (props: DebugOutputProps) => {
  props = { ...defaultProps, ...props };

  return (
    <pre className={"debug-output"} data-testid={"DebugOutput"}>
      <code>{props.children}</code>
    </pre>
  );
};

export default DebugOutput;
