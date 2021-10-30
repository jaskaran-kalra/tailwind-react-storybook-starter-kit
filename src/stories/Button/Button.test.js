import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { Button } from "./Button";
import { LABEL } from "./constants";

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

describe('Button component', () => {
  it("renders Button with label", () => {
    act(() => {
      render(<Button label={LABEL} />, container);
    });
    expect(container.textContent).toBe(LABEL);
  });
});