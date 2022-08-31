// Accordion.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Accordion from "./Accordion";

describe("<Accordion />", () => {
  const component = Accordion;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
