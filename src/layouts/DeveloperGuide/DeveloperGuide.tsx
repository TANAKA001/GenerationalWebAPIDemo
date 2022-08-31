// layouts/DeveloperGuide/DeveloperGuide.tsx

import React from "react";
import "./DeveloperGuide.style.scss";
import Sidebar from "../../components/Sidebar";
import DeveloperMenu from "../../components/Sidebar/SidebarMenuDeveloper";

type Props = {
  children?: React.ReactNode;
};

const DeveloperGuideLayout = ({ children }: Props) => {
  return (
    <div className={"developer-guide"} data-testid={"DeveloperGuideLayout"}>
      <Sidebar menu={<DeveloperMenu />}></Sidebar>
      <div className={"app-body"}>{children}</div>
    </div>
  );
};

export default DeveloperGuideLayout;
