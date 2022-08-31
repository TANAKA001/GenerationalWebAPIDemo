// views/NewClientEntryEdit/NewClientEntryEdit.spec.ts

import React from "react";
// import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import NewClientEntryEdit from "./NewClientEntryEdit";

describe("<NewClientEntryEdit />", () => {
  const component = NewClientEntryEdit;

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
