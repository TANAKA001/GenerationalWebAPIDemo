import React from "react";
import "./Card.style.scss";

export type CardProps = {
  id?: string;
  theme?: "default" | "gray";
  padding?: "none" | "xs" | "sm" | "md" | "lg";
  children?: React.ReactNode;
};

const defaultProps: CardProps = {
  theme: "default",
  padding: "sm",
};

const Card: React.FC<CardProps> = (props: CardProps) => {
  props = { ...defaultProps, ...props };

  return (
    <div id={props.id} className={`card ${props.theme}`} data-testid={"Card"}>
      {props.children}
    </div>
  );
};

export default Card;
