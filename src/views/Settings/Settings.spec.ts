// views/Settings/Settings.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Settings from "./Settings";

describe("<Settings />", () => {
  const component = Settings;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
