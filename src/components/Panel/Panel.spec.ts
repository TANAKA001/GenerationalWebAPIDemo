// Panel.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Panel from "./Panel";

describe("<Panel />", () => {
  const component = Panel;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
