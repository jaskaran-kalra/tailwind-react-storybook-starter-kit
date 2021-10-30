import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { Toggle } from "./Toggle";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Toggle component', () => {
  it("renders Toggle with checkbox element", () => {
    act(() => {
      render(<Toggle />, container);
    });
    expect(container.querySelector('input[type="checkbox"]')).toBeTruthy();
  });
});