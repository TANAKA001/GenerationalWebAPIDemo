// BackButton.tsx

import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./BackButton.style.scss";
import Button from "../Button/Button";

export interface BackButtonProps {
  label?: string;
}

const defaultProps: BackButtonProps = {
  label: "Back",
};

const BackButton: FC<BackButtonProps> = (props: BackButtonProps) => {
  props = { ...defaultProps, ...props };

  const navigate = useNavigate();

  return (
    <Button theme={"control-black"} icon={"chevron-left"} onClick={() => navigate(-1)}>
      {props.label}
    </Button>
  );
};

export default BackButton;
