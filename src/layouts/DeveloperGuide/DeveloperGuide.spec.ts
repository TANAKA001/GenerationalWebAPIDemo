// DeveloperGuide.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import DeveloperGuide from "./DeveloperGuide";

describe("<DeveloperGuide />", () => {
  const component = DeveloperGuide;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
