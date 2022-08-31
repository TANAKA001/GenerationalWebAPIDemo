// DataGrid.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import DataGrid from "./DataGrid";

describe("<DataGrid />", () => {
  const component = DataGrid;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
