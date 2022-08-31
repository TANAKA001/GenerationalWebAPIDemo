// views/MyWorkspaces/MyWorkspaces.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import MyWorkspaces from "./MyWorkspaces";

describe("<MyWorkspaces />", () => {
  const component = MyWorkspaces;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
