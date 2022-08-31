// components/IconTest/IconTest.tsx

import React, { FC } from "react";
import "./IconTest.style.scss";

export interface IconTestProps {
  icon?: string;
  theme?: string;
  size?: number | "sm" | "md" | "lg";
  viewBox?: string;
  role?: "icon" | "graphic" | "img";
}

const defaultProps: IconTestProps = {
  icon: "circle-empty",
  size: "md",
  viewBox: "0 0 24 24",
  role: "icon",
};

const IconTest: FC<IconTestProps> = (props: IconTestProps) => {
  props = { ...defaultProps, ...props };

  return (
    <div className={`icon-test ${props.theme}`} data-testid={"IconTest"}>
      <img src={`/images/icons/${props.icon}.svg`} role={props.role} alt={props.icon} />
    </div>
  );
};

export default IconTest;
