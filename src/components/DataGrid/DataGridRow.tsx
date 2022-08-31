// components/DataGrid/DataGridRow.tsx

import React, { FC } from "react";
import "./DataGrid.style.scss";

export interface DataGridRowProps {
  id?;
  selectable?: boolean;
  onRowSelect?;
  children?: React.ReactNode;
}

const defaultProps: DataGridRowProps = {
  selectable: false,
};

const DataGridRow: FC<DataGridRowProps> = (props: DataGridRowProps) => {
  props = { ...defaultProps, ...props };

  return (
    <tr
      className={`data-grid-row ${props.selectable ? "selectable" : ""}`}
      data-testid={"DataGridRow"}
      onClick={() => props.onRowSelect(props.id)}
    >
      {props.children}
    </tr>
  );
};

export default DataGridRow;
