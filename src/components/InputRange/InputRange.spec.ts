// InputRange.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import InputRange from "./InputRange";

describe("<InputRange />", () => {
  const component = InputRange;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
