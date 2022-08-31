// Thumbnail.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Thumbnail from "./Thumbnail";

describe("<Thumbnail />", () => {
  const component = Thumbnail;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
