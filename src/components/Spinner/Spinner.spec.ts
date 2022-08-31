// Spinner.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Spinner from "./Spinner";

describe("<Spinner />", () => {
  const component = Spinner;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
