// components/DataGrid/DataGrid.tsx

import React, { FC, SetStateAction } from "react";
import "./DataGrid.style.scss";
import DataGridRow from "./DataGridRow";
import DataGridCell from "./DataGridCell";
import Icon from "../Icon";

interface Column {
  key: string;
  name: string;
  sortable?: boolean;
}

export interface DataGridProps {
  id?: string;
  zebraStripe?: boolean;
  selectedColumn?: string;
  selectedColumnChange?: (k) => void;
  order?: "desc" | "asc";
  columns: Column[];
  rows: any[];
  selectableRows?: boolean;
  onRowSelect?;
}

const defaultProps: DataGridProps = {
  zebraStripe: true,
  order: "asc",
  columns: [],
  rows: [],
  selectedColumnChange: (k) => k,
  selectableRows: false,
};

const DataGrid: FC<DataGridProps> = (props: DataGridProps) => {
  props = { ...defaultProps, ...props };

  /**
   * Sort column
   */
  const sortColumn = (key: string) => {
    props.selectedColumnChange && props.selectedColumnChange(key);
  };

  /**
   * Selects a row by id/key
   */
  const selectRow = (id: string) => {
    // console.log(`select row with id: ${id}`);
    props.onRowSelect(id);
  };

  return (
    <div id={props.id} className={"data-grid"} data-testid={"DataGrid"}>
      <table>
        <thead>
          <DataGridRow>
            {props.columns.map((col, index) => (
              <DataGridCell
                key={col.key}
                columnKey={col.key}
                header={true}
                sortable={col.sortable}
                selected={props.selectedColumn === col.key}
                onSelect={(k) => sortColumn(k)}
              >
                {col.name}
                {props.selectedColumn === col.key && (
                  <Icon size={"sm"} icon={props.order === "asc" ? "chevron-up" : "chevron-down"} />
                )}
              </DataGridCell>
            ))}
          </DataGridRow>
        </thead>

        <tbody>
          {props.rows &&
            props.rows.map((row, index) => (
              <DataGridRow
                id={index}
                key={index}
                selectable={props.selectableRows}
                onRowSelect={selectRow}
              >
                {props.columns.map((col) => (
                  <DataGridCell key={col.key}>{row[col.key]}</DataGridCell>
                ))}
              </DataGridRow>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataGrid;
