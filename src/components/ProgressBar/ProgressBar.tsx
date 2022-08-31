// components/ProgressBar/ProgressBar.tsx

import React, { FC } from "react";
import "./ProgressBar.style.scss";

export interface ProgressBarProps {
  progress?: number;
  label?: string;
  showPercent?: boolean;
  showGrid?: boolean;
  color?: "red" | "orange" | "yellow" | "green" | "cyan" | "purple" | "gray";
}

const defaultProps: ProgressBarProps = {
  showGrid: true,
  color: "cyan",
};

const ProgressBar: FC<ProgressBarProps> = (props: ProgressBarProps) => {
  props = { ...defaultProps, ...props };

  return (
    <div className={"progress-bar"} data-testid={"ProgressBar"}>
      {props.label && <div className={"label"}>{props.label}</div>}
      {props.showPercent && <div className={"percent"}>{props.progress}%</div>}
      <div className={`progress`}>
        {props.showGrid && (
          <div className={"bkg-grid"}>
            <div className={"vr"}></div>
            <div className={"vr"}></div>
            <div className={"vr"}></div>
            <div className={"vr"}></div>
            <div className={"vr"}></div>
            <div className={"vr"}></div>
            <div className={"vr"}></div>
            <div className={"vr"}></div>
            <div className={"vr"}></div>
          </div>
        )}
        <div className={"bar-container"}>
          <div className={`bar bar-${props.color}`} style={{ width: props.progress + "%" }}>
            {props.showPercent && <div className={"percent"}>{props.progress}%</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
