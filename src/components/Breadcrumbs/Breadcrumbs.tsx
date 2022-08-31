// Breadcrumbs.tsx

import React, { FC } from "react";
import "./Breadcrumbs.style.scss";
import Crumb, { CrumbProps } from "./Crumb";

export interface BreadcrumbsProps {
  id?: string;
  crumbs?: CrumbProps[];
}

const defaultProps: BreadcrumbsProps = {
  crumbs: [{ name: "Home", url: "/" }],
};

const Breadcrumbs: FC<BreadcrumbsProps> = (props: BreadcrumbsProps) => {
  props = { ...defaultProps, ...props };

  return (
    <ol
      id={props.id}
      className={"breadcrumbs"}
      data-testid={"Breadcrumbs"}
      itemScope
      itemType='https://schema.org/BreadcrumbList'
    >
      {props.crumbs?.map((crumb, index, array) => {
        return (
          <Crumb
            url={crumb.url}
            name={crumb.name}
            className={crumb.className}
            key={index}
            index={index + 1}
            isLast={array.length - 1 === index}
          />
        );
      })}
    </ol>
  );
};

export default Breadcrumbs;
