// AlphaJump.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Alphajump from "./AlphaJump";

describe("<AlphaJump />", () => {
  const component = Alphajump;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
