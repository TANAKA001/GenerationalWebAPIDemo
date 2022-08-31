// IconTest.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import IconTest from "./IconTest";

describe("<IconTest />", () => {
  const component = IconTest;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
