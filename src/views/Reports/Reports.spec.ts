// views/Reports/Reports.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Reports from "./Reports";

describe("<Reports />", () => {
  const component = Reports;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
