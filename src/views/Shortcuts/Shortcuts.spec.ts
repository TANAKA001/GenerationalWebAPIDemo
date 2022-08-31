// views/Shortcuts/Shortcuts.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Shortcuts from "./Shortcuts";

describe("<Shortcuts />", () => {
  const component = Shortcuts;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
