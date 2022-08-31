// components/DataGrid/DataGridCell.tsx

import React, { FC } from "react";
import "./DataGrid.style.scss";
import Icon from "../Icon";

export interface DataGridCellProps {
  header?: boolean;
  sortable?: boolean;
  columnKey?: string;
  selected?: boolean;
  onSelect?: (k) => void;
  children?: React.ReactNode;
}

const defaultProps: DataGridCellProps = {
  header: false,
  sortable: true,
  onSelect: (k) => k,
};

const DataGridCell: FC<DataGridCellProps> = (props: DataGridCellProps) => {
  props = { ...defaultProps, ...props };

  /**
   * Call sort function and sort by key
   */
  const sort = (key?: string) => {
    props.onSelect && props.onSelect(key);
  };

  if (props.header) {
    return (
      <th
        className={`data-grid-cell ${props.sortable !== false ? "sortable" : ""} ${props.selected ? "selected" : ""}`}
        data-testid={"DataGridCell"}
        onClick={() => sort(props.columnKey)}
      >
        {props.children}
      </th>
    );
  } else {
    return (
      <td className={"data-grid-cell"} data-testid={"DataGridCell"}>
        {props.children}
      </td>
    );
  }
};

export default DataGridCell;
