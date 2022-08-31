// Chip.tsx

import React, { FC } from "react";
import "./Chip.style.scss";
import Close from "../Close";

export interface ChipProps {
  label?: string;
  dismissible?: boolean;
}

const defaultProps: ChipProps = {
  dismissible: false,
};

const Chip: FC<ChipProps> = (props: ChipProps) => {
  props = { ...defaultProps, ...props };

  return (
    <div className={`chip ${props.dismissible ? "dismissible" : ""}`} data-testid='Chip'>
      {props.label}
      {props.dismissible && <Close size={"sm"} />}
    </div>
  );
};

export default Chip;
