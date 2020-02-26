const winningCombinations = [
  [0, 1, 2],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6]
];
function findWinner(boxes, recentlyClickedBoxNumber) {
  //find the matching combination for recently selected box
  const combinationsContainsRecentlyClickedBoxNumber = winningCombinations.filter(
    combination => combination.includes(recentlyClickedBoxNumber)
  );

  //Set the appropriate box values to the combinations
  const combinationWithValues = combinationsContainsRecentlyClickedBoxNumber.map(
    combination => combination.map(position => boxes[position])
  );

  //Filter all combinatons which contains null values
  const combinationWithoutNullValues = combinationWithValues.filter(
    item => !item.includes(null)
  );

  //Filter from combinations which combination has the same values
  const winningCombination = combinationWithoutNullValues.filter(combination =>
    combination.every(current => current === combination[0])
  );

  if (winningCombination.length === 0) {
    return;
  } else {
    return `${winningCombination[0][0]} is winner`;
  }
}

function isAllBoxesFilled(boxes) {
  return boxes.includes(null) ? false : true;
}

export { findWinner, isAllBoxesFilled };
