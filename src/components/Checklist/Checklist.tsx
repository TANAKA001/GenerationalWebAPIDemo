// components/Checklist/Checklist.tsx

import React, { FC } from "react";
import "./Checklist.style.scss";
import Icon from "../Icon";

interface ChecklistItem {
  label?: string;
  checked?: boolean;
}

export interface ChecklistProps {
  title?: string;
  items?: ChecklistItem[];
}

const defaultProps: ChecklistProps = {};

const Checklist: FC<ChecklistProps> = (props: ChecklistProps) => {
  props = { ...defaultProps, ...props };

  return (
    <div className={`check-list-block`} data-testid={"Checklist"}>
      {props.title && <h4 className={"check-list-heading"}>{props.title}</h4>}
      <ul className={"check-list"}>
        {props.items &&
          props.items.map((item, index) => {
            return (
              <li key={index} className={`${item.checked ? "checked" : ""}`}>
                <Icon icon={`${item.checked ? "circle-check" : "circle-empty"}`} size={"sm"} />
                {item.label}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Checklist;
