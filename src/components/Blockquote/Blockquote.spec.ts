// Blockquote.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Blockquote from "./Blockquote";

describe("<Blockquote />", () => {
  const component = Blockquote;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
