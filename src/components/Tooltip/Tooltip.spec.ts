// Tooltip.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Tooltip from "./Tooltip";

describe("<Tooltip />", () => {
  const component = Tooltip;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
