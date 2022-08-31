// views/Profile/Profile.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Profile from "./Profile";

describe("<Profile />", () => {
  const component = Profile;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
