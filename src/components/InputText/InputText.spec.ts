import React from "react";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";

import InputText from "./InputText";

describe("<InputText />", () => {
  const component = InputText;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
