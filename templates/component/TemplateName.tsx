// components/TemplateName/TemplateName.tsx

import React, { FC } from "react";
import "./TemplateName.style.scss";

export interface TemplateNameProps {
  id?: string;
}

const defaultProps: TemplateNameProps = {};

const TemplateName: FC<TemplateNameProps> = (props: TemplateNameProps) => {
  props = { ...defaultProps, ...props };

  return (
    <div className={"TemplateName"} data-testid={"TemplateName"}>
      TemplateName Works!
    </div>
  );
};

export default TemplateName;
