// InputWrapper.spec.ts

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import InputWrapper from "./InputWrapper";

describe("<InputWrapper />", () => {
  const component = InputWrapper;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
