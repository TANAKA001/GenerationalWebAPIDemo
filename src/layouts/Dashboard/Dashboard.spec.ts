// Dashboard.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  const component = Dashboard;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
