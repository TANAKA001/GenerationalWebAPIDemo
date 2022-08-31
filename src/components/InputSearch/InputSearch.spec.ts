// InputSearch.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import InputSearch from "./InputSearch";

describe("<InputSearch />", () => {
  const component = InputSearch;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
