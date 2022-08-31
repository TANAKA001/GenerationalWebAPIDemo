// ProgressBar.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ProgressBar from "./ProgressBar";

describe("<ProgressBar />", () => {
  const component = ProgressBar;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
