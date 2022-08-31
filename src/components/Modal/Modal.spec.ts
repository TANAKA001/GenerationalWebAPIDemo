// Modal.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Modal from "./Modal";

describe("<Modal />", () => {
  const component = Modal;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
