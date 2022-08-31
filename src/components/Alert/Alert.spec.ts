// Alert.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Alert from "./Alert";

describe("<Alert />", () => {
  const component = Alert;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
