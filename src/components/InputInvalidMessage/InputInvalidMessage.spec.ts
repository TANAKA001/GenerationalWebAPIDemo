// InputInvalidMessage.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import InputInvalidMessage from "./InputInvalidMessage";

describe("<InputInvalidMessage />", () => {
  const component = InputInvalidMessage;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
