// Timeline.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Timeline from "./Timeline";

describe("<Timeline />", () => {
  const component = Timeline;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
