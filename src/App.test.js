import { render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

test("renders learn react app", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  expect(div.innerHTML).toContain("react testing");
  ReactDOM.unmountComponentAtNode(div);
});
