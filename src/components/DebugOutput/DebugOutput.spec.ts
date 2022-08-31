// DebugOutput.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import DebugOutput from "./DebugOutput";

describe("<DebugOutput />", () => {
  const component = DebugOutput;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
