// Badge.spec.ts

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Badge from "./Badge";

describe("<Badge />", () => {
  const component = Badge;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
