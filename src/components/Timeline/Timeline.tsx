// components/Timeline/Timeline.tsx

import React, { FC } from "react";
import "./Timeline.style.scss";

interface Moment {
  label?: string;
  status?: "complete" | "incomplete" | "in-progress";
}

export interface TimelineProps {
  id?: string;
  timeline?: Moment[];
}

const defaultProps: TimelineProps = {
  timeline: [],
};

const Timeline: FC<TimelineProps> = (props: TimelineProps) => {
  props = { ...defaultProps, ...props };

  const isLast = (i) => props.timeline && i === props.timeline.length - 1;

  return (
    <div id={props.id} className={"timeline"} data-testid={"Timeline"}>
      {props.timeline &&
        props.timeline.map((moment, i) => (
          <div key={i} className={`timeline-block ${i === 0 ? "first" : ""} ${isLast(i) ? "last" : ""}`}>
            <div className={`moment ${moment.status}`} data-label={moment.label}></div>
            {!isLast(i) && <div className={"line"}></div>}
          </div>
        ))}
    </div>
  );
};

export default Timeline;
