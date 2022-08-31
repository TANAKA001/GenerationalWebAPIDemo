// components/SidebarMenu/SidebarMenuItem.tsx

import React, { FC } from "react";
import "./SidebarMenuItem.style.scss";
import { NavLink, To } from "react-router-dom";
import { IconOptions } from "../Icon/Icons.d";
import Icon from "../Icon";
import Badge from "../Badge";

export interface SidebarMenuItemProps {
  link: To;
  icon: IconOptions;
  label?: string;
  badge?: string;
}

const defaultProps: SidebarMenuItemProps = {
  link: "/",
  icon: "circle-empty",
};

const SidebarMenuItem: FC<SidebarMenuItemProps> = (props: SidebarMenuItemProps) => {
  props = { ...defaultProps, ...props };

  return (
    <NavLink
      to={props.link}
      className={(state) => {
        return state.isActive ? "sidebar-menu-item active" : "sidebar-menu-item";
      }}
      data-testid={"SidebarMenuItem"}
    >
      <span className={"menu-item-icon"}>
        <Icon icon={props.icon} />
      </span>
      <span className={"menu-item-label"}>{props.label}</span>
      <span className={"menu-item-badge"}>{props.badge && <Badge size={"sm"}>{props.badge}</Badge>}</span>
    </NavLink>
  );
};

export default SidebarMenuItem;
