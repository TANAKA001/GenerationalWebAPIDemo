// Sidebar.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Sidebar from "./Sidebar";

describe("<Sidebar />", () => {
  const component = Sidebar;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
