// components/Sidebar/SidebarMenuDashboard.tsx

import React, { FC } from "react";
import "./SidebarMenu.style.scss";
import SidebarMenuItem from "./SidebarMenuItem";
import { SidebarMenuProps } from "./SidebarMenu";

const defaultProps: SidebarMenuProps = {};

const DashboardMenu: FC<SidebarMenuProps> = (props: SidebarMenuProps) => {
  props = { ...defaultProps, ...props };

  return (
    <nav data-testid={"SidebarMenu"}>
      <ul className={"sidebar-menu"}>
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
      </ul>
    </nav>
  );
};

export default DashboardMenu;
