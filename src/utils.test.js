import { findWinner, isAllBoxesFilled } from "./utils";

it("find winner for 0,1,2 matching combination", () => {
  const xBoard = ["x", "x", "x", null, null, null, "o", "x", null];
  const oBoard = ["x", "x", "x", null, null, null, "o", "x", null];
  expect(findWinner(xBoard, 1)).toEqual("x is winner");
});

it("find winner for 1,4,7 matching combination", () => {
  const boxes = ["o", "x", "x", "o", "x", "o", "o", "x", null];
  expect(findWinner(boxes, 1)).toEqual("x is winner");
});

it("find winner for 2,5,8 matching combination", () => {
  const boxes = ["o", "o", "x", null, "o", "x", "o", "x", "x"];
  expect(findWinner(boxes, 8)).toEqual("x is winner");
});

it("find winner for 2,5,8 not matching combination", () => {
  const boxes = [null, null, "x", null, "x", "o", null, null, "o"];
  expect(findWinner(boxes, 8)).toEqual(undefined);
});

it("find winner for wrong parameters", () => {
  const boxes = ["x", "x", "x", "o", "o", null, null, null, null];
  expect(findWinner(boxes, 8)).toEqual(undefined);
});

it("All boxes are filled and no one wins", () => {
  const boxes = ["x", "o", "x", "o", "o", "x", "o", "x", "o"];
  expect(isAllBoxesFilled(boxes)).toEqual(true);
});

it("All boxes are filled and some one wins", () => {
  const boxes = ["x", "x", "x", "o", "o", "x", "o", "x", "o"];
  expect(isAllBoxesFilled(boxes)).toEqual(true);
});
