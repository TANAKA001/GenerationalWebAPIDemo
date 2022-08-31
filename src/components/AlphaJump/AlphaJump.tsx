// components/AlphaJump/AlphaJump.tsx

import React, { FC } from "react";
import "./AlphaJump.style.scss";

export interface AlphaJumpProps {
  location: string;
  locationChange: React.Dispatch<React.SetStateAction<string>>;
}

const defaultProps: AlphaJumpProps = {
  location: "A",
  locationChange: (v) => v,
};

const AlphaJump: FC<AlphaJumpProps> = (props: AlphaJumpProps) => {
  props = { ...defaultProps, ...props };

  const alphabet: string[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const jumpTo = (alpha) => {
    props.locationChange(alpha);
  };

  return (
    <div className={"alpha-jump"} data-testid={"AlphaJump"}>
      {alphabet.map((alpha, index) => (
        <div
          key={index}
          className={`alpha ${alpha === props.location ? "selected" : ""}`}
          onClick={() => jumpTo(alpha)}
        >
          <div className={"pin"}>{alpha}</div>
          {alpha}
        </div>
      ))}
    </div>
  );
};

export default AlphaJump;
