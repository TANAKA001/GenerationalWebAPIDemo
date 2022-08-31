// InputToggle.spec.ts

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import InputToggle from "./InputToggle";

describe("<InputToggle />", () => {
  const component = InputToggle;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
