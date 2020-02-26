import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { shallow } from "enzyme";
import Status from "./components/status/status";
import Board from "./components/board/board";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

it("render components", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Status)).toHaveLength(1);
  expect(wrapper.find(Board)).toHaveLength(1);
});
