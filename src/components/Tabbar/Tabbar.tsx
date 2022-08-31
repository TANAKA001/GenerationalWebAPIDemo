// components/Tabbar/Tabbar.tsx

import React, { FC } from "react";
import "./Tabbar.style.scss";
import Tab from "./Tab";

export interface TabbarProps {
  id?: string;
  tabs?: {
    label: string;
    key: string;
    badge?: number;
    theme?: "danger" | "default" | "warning";
  }[];
  selected?: string;
  onTabChange: React.Dispatch<React.SetStateAction<string>>;
}

const defaultProps: TabbarProps = {
  tabs: [],
  onTabChange: (t) => t,
};

const Tabbar: FC<TabbarProps> = (props: TabbarProps) => {
  props = { ...defaultProps, ...props };

  return (
    <ul className={"tabbar"} data-testid={"Tabbar"}>
      {props.tabs?.map((tab, index) => {
        return (
          <li key={index}>
            <Tab
              label={tab.label}
              key={tab.key}
              selected={tab.key === props.selected}
              badge={tab.badge}
              theme={tab.theme}
              onTabClick={() => props.onTabChange(tab.key || tab.label)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Tabbar;
