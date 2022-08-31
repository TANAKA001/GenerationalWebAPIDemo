import React from "react";
import "./CardFoot.style.scss";

export type CardFootProps = {
  padding?: "none" | "xs" | "sm" | "md" | "lg";
  children?: React.ReactNode;
};

const defaultProps: CardFootProps = {};

const CardFoot: React.FC<CardFootProps> = (props: CardFootProps) => {
  props = { ...defaultProps, ...props };

  return (
    <div className={`card-foot`} data-testid={"CardFoot"}>
      {props.children}
    </div>
  );
};

export default CardFoot;
