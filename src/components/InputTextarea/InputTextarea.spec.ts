// InputTextarea.spec.ts

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import InputTextarea from "./InputTextarea";

describe("<InputTextarea />", () => {
  const component = InputTextarea;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
