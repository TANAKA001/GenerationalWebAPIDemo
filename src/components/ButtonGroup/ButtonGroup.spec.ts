// ButtonGroup.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ButtonGroup from "./ButtonGroup";

describe("<ButtonGroup />", () => {
  const component = ButtonGroup;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
