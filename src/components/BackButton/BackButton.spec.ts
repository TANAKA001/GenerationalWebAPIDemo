// BackButton.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import BackButton from "./BackButton";

describe("<BackButton />", () => {
  const component = BackButton;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
