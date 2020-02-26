import React from "react";
import { shallow } from "enzyme";
import BoardBox from "../board-box/board-box";
import Button from "../button/button";
import Board from "./board";

it("should render components", () => {
  const wrapper = shallow(<Board />);
  expect(wrapper.find(BoardBox)).toHaveLength(9);
  expect(wrapper.find(Button)).toHaveLength(1);
});
