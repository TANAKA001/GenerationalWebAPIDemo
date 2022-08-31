// InputSelect.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import InputSelect from "./InputSelect";

describe("<InputSelect />", () => {
  const component = InputSelect;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
