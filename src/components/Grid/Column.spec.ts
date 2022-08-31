// Column.spec.ts

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Column from "./Column";

describe("<Column />", () => {
  const component = Column;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
