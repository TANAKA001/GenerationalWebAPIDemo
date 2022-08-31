// Checklist.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Checklist from "./Checklist";

describe("<Checklist />", () => {
  const component = Checklist;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
