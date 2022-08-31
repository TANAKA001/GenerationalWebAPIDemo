// Breadcrumbs.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Breadcrumbs from "./Breadcrumbs";

describe("<Breadcrumbs />", () => {
  const component = Breadcrumbs;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
