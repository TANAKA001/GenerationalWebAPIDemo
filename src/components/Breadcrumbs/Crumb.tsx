// Crumb.tsx

import React, { FC } from "react";
import { Link } from "react-router-dom";
// import "./Crumb.style.scss";

export interface CrumbProps {
  url: string;
  name: string;
  index?: number;
  isLast?: boolean;
  className?: string;
}

const defaultProps: CrumbProps = {
  index: 0,
  url: "/",
  name: "Home",
};

const Crumb: FC<CrumbProps> = (props: CrumbProps) => {
  props = { ...defaultProps, ...props };

  return (
    <React.Fragment>
      <li
        className={`crumb ${props.className}`}
        data-testid={"Crumb"}
        itemProp='itemListElement'
        itemScope
        itemType='https://schema.org/ListItem'
        key={props.index}
      >
        {!props.isLast ? (
          <Link itemProp='item' to={props.url} className='crumb-link'>
            <span itemProp='name' className='crumb-name'>
              {props.name}
            </span>
          </Link>
        ) : (
          <span itemProp='name' className='crumb-name'>
            {props.name}
          </span>
        )}
      </li>
    </React.Fragment>
  );
};

export default Crumb;
