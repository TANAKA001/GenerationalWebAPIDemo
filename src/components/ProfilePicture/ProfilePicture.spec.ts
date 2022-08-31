// ProfilePicture.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ProfilePicture from "./ProfilePicture";

describe("<ProfilePicture />", () => {
  const component = ProfilePicture;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
