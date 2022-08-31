// components/Accordion/AccordionGroup.tsx

import React, { FC, useRef, useState } from "react";
import "./Accordion.style.scss";
import { randomString } from "../../functions";

export interface AccordionGroupProps {
  id?: string;
  children?: React.ReactNode;
}

const defaultProps: AccordionGroupProps = {
  id: randomString(),
};

const AccordionGroup: FC<AccordionGroupProps> = (props: AccordionGroupProps) => {
  props = { ...defaultProps, ...props };

  // const [isOpen, setIsOpen] = useState("");
  const group = useRef(null);
  // console.log(group);

  // const accordions = document.getElementsByClassName("accordion");
  // console.log(accordions);

  return (
    <div id={props.id} ref={group} className={"accordion-group"} data-testid={"AccordionGroup"}>
      {props.children}
    </div>
  );
};

export default AccordionGroup;
