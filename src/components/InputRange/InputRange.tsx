// components/InputRange/InputRange.tsx

import React, { FC } from "react";
import "./InputRange.style.scss";

export interface InputRangeProps {
  id?: string;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  // onValueChange: React.Dispatch<React.SetStateAction<InputRangeProps["value"]>>;
}

const defaultProps: InputRangeProps = {
  min: 0,
  max: 100,
  step: 1,
  value: 0,
  // onValueChange: (v) => v,
};

const InputRange: FC<InputRangeProps> = (props: InputRangeProps) => {
  props = { ...defaultProps, ...props };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // props.onValueChange(value);
  };

  return (
    <div className={"InputRange"} data-testid={"InputRange"}>
      <input
        id={props.id}
        type='range'
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.value}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputRange;
