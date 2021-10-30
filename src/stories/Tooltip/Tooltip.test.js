import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { TEXT } from "./constants";

import { Tooltip } from "./Tooltip";

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

describe('Tooltip component', () => {
  it("renders Tooltip with checkbox element", () => {
    act(() => {
      render(<Tooltip text={TEXT} />, container);
    });
    expect(container.textContent).toBe(TEXT);
  });
});