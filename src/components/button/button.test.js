import React from "react";
import renderer from "react-test-renderer";
import Button from "./button";

it("renders correctly - default state", () => {
  const tree = renderer.create(<Button buttonLable="" />).toJSON();
  expect(tree).toMatchSnapshot();
});
