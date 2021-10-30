import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import { LoginForm } from "./LoginForm";

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

describe('LoginForm component', () => {
  it("renders LoginForm with form elements", () => {
    act(() => {
      render(<LoginForm />, container);
    });
    expect(container.querySelector('form')).toBeTruthy();
    expect(container.querySelector('input[type="text"]')).toBeTruthy();
    expect(container.querySelector('input[type="password"]')).toBeTruthy();
  });
});