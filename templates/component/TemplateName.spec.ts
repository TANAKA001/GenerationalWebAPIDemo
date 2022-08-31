// TemplateName.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import TemplateName from "./TemplateName";

describe("<TemplateName />", () => {
  const component = TemplateName;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
