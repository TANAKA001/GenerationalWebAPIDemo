import React from "react";
import "./CardHead.style.scss";

export type CardHeadProps = {
  heading?: string;
  children?: React.ReactNode;
};

const defaultProps: CardHeadProps = {};

const CardHead: React.FC<CardHeadProps> = (props: CardHeadProps) => {
  props = { ...defaultProps, ...props };

  return (
    <div className={`card-head`}>
      <div className={"card-title"}>{props.heading}</div>
      <div className={"card-head-outlet"}>{props.children}</div>
    </div>
  );
};

export default CardHead;
