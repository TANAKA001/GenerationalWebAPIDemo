// components/Sidebar/Sidebar.tsx

import React, { FC } from "react";
import "./Sidebar.style.scss";
import Panel from "../Panel";
import Button from "../Button";

export interface SidebarProps {
  open?: boolean;
  menu?: React.ReactNode;
}

const defaultProps: SidebarProps = {
  open: true,
};

const Sidebar: FC<SidebarProps> = (props: SidebarProps) => {
  props = { ...defaultProps, ...props };

  const toggleSidebar = (event): void => {
    props.open = !props.open;
  };

  return (
    <div className={`sidebar ${props.open ? "open" : "closed"}`} data-testid={"Sidebar"}>
      <div className={"sidebar-inner"}>
        <div className={"sidebar-header"} onClick={toggleSidebar}>
          <img className={"brand"} src={`/images/apthub-logo.svg`} alt={"AptHub"} />
        </div>
        <div className={"sidebar-body"}>
          {props.menu}
          <div className={"flex-grow-1"}></div>
          <div>
            <Panel theme={"gray"}>
              <h5>Start New Action</h5>
              <p>Etiam porta sem malesuada magna mollis euismod.</p>
              <Button theme={"primary"}>Create New</Button>
            </Panel>
          </div>
        </div>
        <div className={"sidebar-footer"}>user controls here</div>
      </div>
    </div>
  );
};

export default Sidebar;
