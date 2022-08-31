import React from "react";
import "./Section.scss";

export type SectionProps = {
  id?: string;
  spacing?: "none" | "xs" | "sm" | "md" | "lg";
  justify?: "right" | "center" | "left" | "fluid";
  children?: React.ReactNode;
};

const defaultProps: SectionProps = {
  spacing: "sm",
  justify: "fluid",
};

const Section: React.FC<SectionProps> = (props: SectionProps) => {
  props = { ...defaultProps, ...props };

  return (
    <section id={props.id} className={`section spacing-${props.spacing} justify-${props.justify}`}>
      <div className={`container ${props.justify}`}>{props.children}</div>
    </section>
  );
};

export default Section;
