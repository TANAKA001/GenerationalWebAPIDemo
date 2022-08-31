// SparklinePie.tsx

import React, { FC } from "react";
import "./SparklinePie.style.scss";
import Icon from "../Icon";

export interface SparklinePieProps {
  size?: number;
  percent?: number;
}

const defaultProps: SparklinePieProps = {
  size: 30,
  percent: 0,
};

const SparklinePie: FC<SparklinePieProps> = (props: SparklinePieProps) => {
  props = { ...defaultProps, ...props };

  const pieStyle = {
    background: `conic-gradient(${props.percent === 100 ? "#86BC25" : "black"} ${props.percent}%, #0000 0)`,
  };

  return (
    <div className={"sparkline-pie"} data-testid={"SparklinePie"}>
      <div className={`inner-pie ${props.percent === 100 ? "complete" : ""}`} style={pieStyle}>
        {props.percent === 100 && <Icon icon={"check"} theme={"success"} />}
      </div>
    </div>
  );
};

export default SparklinePie;
