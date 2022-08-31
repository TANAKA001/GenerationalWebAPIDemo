// components/SidebarMenu/SidebarMenu.tsx

import React, { FC } from "react";
import "./SidebarMenu.style.scss";
import SidebarMenuItem from "./SidebarMenuItem";

export interface SidebarMenuProps {
  id?: string;
}

const defaultProps: SidebarMenuProps = {};

const SidebarMenu: FC<SidebarMenuProps> = (props: SidebarMenuProps) => {
  props = { ...defaultProps, ...props };

  return (
    <ul className={"sidebar-menu"} data-testid={"SidebarMenu"}>
      <li>
        <SidebarMenuItem link={"/overview"} label={"Overview"} icon={"layout"} />
      </li>
      <li>
        <SidebarMenuItem link={"/people"} label={"People"} icon={"users"} />
      </li>
      <li>
        <SidebarMenuItem link={"/roles-and-permissions"} label={"Roles & Permissions"} icon={"sliders"} />
      </li>
      <li>
        <SidebarMenuItem link={"/properties"} label={"Properties"} icon={"map-pin"} badge={"12"} />
      </li>
      <li>
        <SidebarMenuItem link={"/activity-log"} label={"Activity Log"} icon={"activity"} />
      </li>
      <li>
        <SidebarMenuItem link={"/reports"} label={"Reports"} icon={"file-text"} />
      </li>
      <li className={"sidebar-label"}>Other</li>
      <li>
        <SidebarMenuItem link={"/login"} label={"Login"} icon={"circle-empty"} />
      </li>
      <li className={"sidebar-label"}>Developer Guide</li>
      <li>
        <SidebarMenuItem link={"/dev-guide/typography"} label={"Typography"} icon={"circle-empty"} />
      </li>
      <li>
        <SidebarMenuItem link={"/dev-guide/form-inputs"} label={"Form Inputs"} icon={"circle-empty"} />
      </li>
      <li>
        <SidebarMenuItem link={"/dev-guide/components"} label={"Components"} icon={"circle-empty"} />
      </li>
    </ul>
  );
};

export default SidebarMenu;
