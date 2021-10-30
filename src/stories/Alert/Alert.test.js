import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { Alert } from "./Alert";
import { DESCRIPTION, HEADING } from "./constants";

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

describe('Alert component', () => {
  it("renders Alert with heading", () => {
    act(() => {
      render(<Alert heading={HEADING} />, container);
    });
    expect(container.textContent).toBe(HEADING);
  });

  it("renders Alert with description", () => {
    act(() => {
      render(<Alert heading={DESCRIPTION} />, container);
    });
    expect(container.textContent).toBe(DESCRIPTION);
  });
});