// Paginator.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Paginator from "./Paginator";

describe("<Paginator />", () => {
  const component = Paginator;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
