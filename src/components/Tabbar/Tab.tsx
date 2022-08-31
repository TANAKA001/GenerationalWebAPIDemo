// components/Tab/Tab.tsx

import React, { FC } from "react";
import "./Tab.style.scss";
import Badge from "../Badge";
import { randomString } from "../../functions";

export interface TabProps {
  label: string;
  key: string;
  selected?: boolean;
  theme?: "default" | "warning" | "danger";
  badge?: number;
  onTabClick: React.Dispatch<React.SetStateAction<string>>;
}

const defaultProps: TabProps = {
  label: "MISSING LABEL",
  key: randomString(),
  selected: false,
  theme: "default",
  onTabClick: (t) => t,
};

const Tab: FC<TabProps> = (props: TabProps) => {
  props = { ...defaultProps, ...props };

  return (
    <button
      className={`tab ${props.theme} ${props.selected ? "selected" : ""}`}
      onClick={() => props.onTabClick(props.key || props.label)}
      data-testid={"Tab"}
    >
      {props.label}
      {props.badge && (
        <Badge size={"xs"} theme={props.selected ? props.theme : "default"}>
          {props.badge}
        </Badge>
      )}
    </button>
  );
};

export default Tab;
