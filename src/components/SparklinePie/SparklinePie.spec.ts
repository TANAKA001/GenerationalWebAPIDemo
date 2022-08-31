// SparklinePie.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import SparklinePie from "./SparklinePie";

describe("<SparklinePie />", () => {
  const component = SparklinePie;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
