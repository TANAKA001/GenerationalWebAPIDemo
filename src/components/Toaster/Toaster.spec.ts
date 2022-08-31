// Toaster.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Toaster from "./Toaster";

describe("<Toaster />", () => {
  const component = Toaster;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
