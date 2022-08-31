// InputLabel.spec.ts

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import InputLabel from "./InputLabel";

describe("<InputLabel />", () => {
  const component = InputLabel;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
