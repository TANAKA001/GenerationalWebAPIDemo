// InputRadioGroup.spec.ts

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import InputRadioGroup from "./InputRadioGroup";

describe("<InputRadioGroup />", () => {
  const component = InputRadioGroup;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
