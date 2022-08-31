// Chip.spec.ts

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Chip from "./Chip";

describe("<Chip />", () => {
  const component = Chip;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
