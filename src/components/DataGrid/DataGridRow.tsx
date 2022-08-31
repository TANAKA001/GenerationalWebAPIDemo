// components/DataGrid/DataGridRow.tsx

import React, { FC } from "react";
import "./DataGrid.style.scss";

export interface DataGridRowProps {
  children?: React.ReactNode;
}

const defaultProps: DataGridRowProps = {};

const DataGridRow: FC<DataGridRowProps> = (props: DataGridRowProps) => {
  props = { ...defaultProps, ...props };

  return (
    <tr className={"data-grid-row"} data-testid={"DataGridRow"}>
      {props.children}
    </tr>
  );
};

export default DataGridRow;
