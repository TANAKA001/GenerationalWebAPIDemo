// layouts/TemplateName/TemplateName.tsx

import React from "react";
import { Outlet } from "react-router-dom";
import "./TemplateName.style.scss";

const TemplateNameLayout = () => {
  return (
    <div className={"TemplateName"} data-testid={"TemplateNameLayout"}>
      <Outlet />
    </div>
  );
};

export default TemplateNameLayout;
