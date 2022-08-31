// components/Accordion/AccordionBody.tsx

import React, { FC } from "react";
import "./Accordion.style.scss";

export interface AccordionBodyProps {
  expanded?: boolean;
  children?: React.ReactNode;
}

const defaultProps: AccordionBodyProps = {
  expanded: false,
};

const AccordionBody: FC<AccordionBodyProps> = (props: AccordionBodyProps) => {
  props = { ...defaultProps, ...props };

  return (
    <div className={"accordion-body"} data-testid={"AccordionBodyProps"}>
      {props.children}
    </div>
  );
};

export default AccordionBody;
