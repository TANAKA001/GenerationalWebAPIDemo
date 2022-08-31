// Close.spec.ts

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Close from "./Close";

describe("<Close />", () => {
  const component = Close;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
