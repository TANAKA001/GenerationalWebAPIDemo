// views/Apps/Apps.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Apps from "./Apps";

describe("<Apps />", () => {
  const component = Apps;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
