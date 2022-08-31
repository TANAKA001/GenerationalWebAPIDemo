// Card.spec.ts

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Card from "./Card";

describe("<Card />", () => {
  const component = Card;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
