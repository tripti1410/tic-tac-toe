import React from "react";
import renderer from "react-test-renderer";
import BoardBox from "./board-box";

it("renders correctly - default state", () => {
  const tree = renderer
    .create(<BoardBox value="" onClick={jest.fn()} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
