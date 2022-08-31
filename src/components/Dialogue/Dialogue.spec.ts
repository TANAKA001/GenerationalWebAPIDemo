// Dialogue.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Dialogue from "./Dialogue";

describe("<Dialogue />", () => {
  const component = Dialogue;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
