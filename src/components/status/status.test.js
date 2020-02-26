import React from "react";
import renderer from "react-test-renderer";
import Status from "./status";

it("renders correctly - default state", () => {
  const tree = renderer
    .create(<Status message="" clickHandle={jest.fn()} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
