// components/Accordion/Accordion.tsx

import React, { FC, ReactElement, useState } from "react";
import "./Accordion.style.scss";
import { randomString } from "../../functions";
import AccordionHead from "./AccordionHead";

export interface AccordionProps {
  id?: string;
  children?: React.ReactNode;
}

const defaultProps: AccordionProps = {
  id: randomString(),
};

const Accordion: FC<AccordionProps> = (props: AccordionProps) => {
  props = { ...defaultProps, ...props };

  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const onActiveChange = (index) => {
    console.log("You clicked accordion with index:", index);
    toggleExpanded();
  };

  if (props.children) {
    React.Children.map(props.children, (child: React.ReactNode, index) => {
      // console.log((child as ReactElement)?.type);
      // console.log(typeof child);
      // console.log(`expanded: ${(child as ReactElement)?.props?.expanded}`);
      if (child && ["object"].indexOf(typeof child) && (child as ReactElement).type === AccordionHead) {
        // console.log("foo");
      }
    });
  }

  return (
    <div
      id={props.id}
      className={`accordion ${expanded ? "expanded" : ""}`}
      onChange={onActiveChange}
      data-testid={"Accordion"}
    >
      {props.children}
    </div>
  );
};

export default Accordion;
