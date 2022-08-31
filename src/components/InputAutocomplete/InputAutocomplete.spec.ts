// InputAutocomplete.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import InputAutocomplete from "./InputAutocomplete";

describe("<InputAutocomplete />", () => {
  const component = InputAutocomplete;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
