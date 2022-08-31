// components/Tooltip/Tooltip.tsx

import React, { FC } from "react";
import "./Tooltip.style.scss";
import Icon from "../Icon";
import ReactTooltip from "react-tooltip";
import { randomString } from "../../functions";

export interface TooltipProps {
  id?: string;
  tip?: string;
}

const defaultProps: TooltipProps = {
  id: randomString(),
};

const Tooltip: FC<TooltipProps> = (props: TooltipProps) => {
  props = { ...defaultProps, ...props };

  if (props.tip) {
    return (
      <div className={"tooltip"} data-testid={"Tooltip"} data-tip='' data-for={props.id}>
        <ReactTooltip id={props.id} className={"tip"} place={"top"} effect={"solid"} delayShow={400} delayHide={600}>
          {props.tip}
        </ReactTooltip>
        <Icon icon={"info"} size={"md"} />
      </div>
    );
  } else {
    return null;
  }
};

export default Tooltip;
