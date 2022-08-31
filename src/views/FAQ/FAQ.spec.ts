// views/FAQ/FAQ.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import FAQ from "./FAQ";

describe("<FAQ />", () => {
  const component = FAQ;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
