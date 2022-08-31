// InputCheckbox.spec.ts

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import InputCheckbox from "./InputCheckbox";

describe("<InputCheckbox />", () => {
  const component = InputCheckbox;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
