// components/SidebarMenu/SidebarMenu.tsx

import React, { FC } from "react";
import "./SidebarMenu.style.scss";
import SidebarMenuItem from "./SidebarMenuItem";
import { SidebarMenuProps } from "./SidebarMenu";

const defaultProps: SidebarMenuProps = {};

const DeveloperMenu: FC<SidebarMenuProps> = (props: SidebarMenuProps) => {
  props = { ...defaultProps, ...props };

  return (
    <ul className={"sidebar-menu"} data-testid={"SidebarMenu"}>
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
      <li className={"sidebar-label"}>Other</li>
      <li>
        <SidebarMenuItem link={"/login"} label={"Login"} icon={"circle-empty"} />
      </li>
    </ul>
  );
};

export default DeveloperMenu;
