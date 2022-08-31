// Row.spec.ts

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Row from "./Row";

describe("<Row />", () => {
  const component = Row;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
