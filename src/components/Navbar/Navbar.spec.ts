// Navbar.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Navbar from "./Navbar";

describe("<Navbar />", () => {
  const component = Navbar;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
