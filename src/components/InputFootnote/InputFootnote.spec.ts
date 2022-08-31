// InputFootnote.spec.ts

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import InputFootnote from "./InputFootnote";

describe("<InputFootnote />", () => {
  const component = InputFootnote;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
