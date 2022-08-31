// Icon.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Icon from "./Icon";

describe("<Icon />", () => {
  const component = Icon;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
