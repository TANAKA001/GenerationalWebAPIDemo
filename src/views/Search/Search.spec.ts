// views/Search/Search.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Search from "./Search";

describe("<Search />", () => {
  const component = Search;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
