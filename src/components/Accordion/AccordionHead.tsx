// components/Accordion/AccordionHead.tsx

import React, { FC, useState } from "react";
import "./Accordion.style.scss";
import Icon from "../Icon";

export interface AccordionHeadProps {
  expanded?: boolean;
  children?: React.ReactNode;
}

const defaultProps: AccordionHeadProps = {
  expanded: false,
};

const AccordionHead: FC<AccordionHeadProps> = (props: AccordionHeadProps) => {
  props = { ...defaultProps, ...props };

  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    // console.log("click accordion head");
    setExpanded(!expanded);
  };

  return (
    <div
      className={`accordion-head ${expanded ? "expanded" : ""}`}
      onClick={toggleExpanded}
      data-testid={"AccordionHead"}
    >
      <div>{props.children}</div>
      <div>
        <Icon icon={expanded ? "chevron-up" : "chevron-down"} />
      </div>
    </div>
  );
};

export default AccordionHead;
