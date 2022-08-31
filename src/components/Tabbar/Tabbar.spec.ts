// Tabbar.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Tabbar from "./Tabbar";

describe("<Tabbar />", () => {
  const component = Tabbar;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
