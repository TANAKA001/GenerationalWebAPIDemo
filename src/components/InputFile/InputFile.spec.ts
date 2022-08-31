// InputFile.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import InputFile from "./InputFile";

describe("<InputFile />", () => {
  const component = InputFile;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
