import React from "react";
import "./CardBody.style.scss";

export type CardBodyProps = {
  padding?: "none" | "xs" | "sm" | "md" | "lg";
  children?: React.ReactNode;
};

const defaultProps: CardBodyProps = {};

const CardBody: React.FC<CardBodyProps> = (props: CardBodyProps) => {
  props = { ...defaultProps, ...props };

  return (
    <div className={`card-body padding-${props.padding}`} data-testid={"CardBody"}>
      {props.children}
    </div>
  );
};

export default CardBody;
