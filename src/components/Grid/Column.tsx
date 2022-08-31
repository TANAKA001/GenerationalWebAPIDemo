import React from "react";
import "./Column.scss";
// import { toCSSString } from "../../functions/string.functions";

type NumberAttr = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
type ColSize = boolean | "auto" | NumberAttr;
type ColOrderNumber = number | "1" | "2" | "3" | "4" | "5";
type ColOrder = ColOrderNumber | "first" | "last";
type ColSpec = ColSize | { span?: ColSize; offset?: NumberAttr; order?: ColOrder };

export type ColumnProps = {
  id?: string;
  xs?: ColSpec;
  sm?: ColSpec;
  md?: ColSpec;
  lg?: ColSpec;
  xl?: ColSpec;
  children?: React.ReactNode;
};

const Column: React.FC<ColumnProps> = ({ id, xs, sm, md, lg, xl, children }) => {
  const BreakPoints = ["xs", "sm", "md", "lg", "xl"];
  const spans: string[] = [];
  const classes: string[] = [];

  const getClasses = (): string => {
    const props = [xs, sm, md, lg, xl];

    BreakPoints.forEach((bp, index) => {
      const propValue = props[index];
      let span: ColSize | undefined;
      let offset: NumberAttr | undefined;
      let order: ColOrder | undefined;

      if (typeof propValue === "object" && propValue != null) {
        ({ span, offset, order } = propValue);
      } else {
        span = propValue;
      }

      if (span) {
        spans.push(span === true ? `col-${bp}` : `col-${bp}-${span}`);
      }

      if (order != null) classes.push(`order-${bp}-${order}`);
      if (offset != null) classes.push(`offset-${bp}-${offset}`);
    });

    return [...spans, ...classes].toString().replace(/,/g, " ");
  };

  return (
    <div id={id} className={getClasses() + " col"}>
      {children}
    </div>
  );
};

export default Column;
