// views/NewClientEntry/NewClientEntry.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import NewClientEntry from "./NewClientEntry";

describe("<NewClientEntry />", () => {
  const component = NewClientEntry;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
