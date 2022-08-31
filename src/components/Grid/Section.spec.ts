// Section.spec.ts

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Section from "./Section";

describe("<Section />", () => {
  const component = Section;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
