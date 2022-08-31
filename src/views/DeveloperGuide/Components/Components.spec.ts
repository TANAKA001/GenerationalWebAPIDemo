// views/Components/Components.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Components from "./Components";

describe("<Components />", () => {
  const component = Components;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
