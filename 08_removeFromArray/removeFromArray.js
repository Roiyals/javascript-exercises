// let randomTest = [1, 2, 3, 4];

const removeFromArray = function (arr, ...arg) {
  let newArr = arr.filter((noneed) => !arg.includes(noneed));

  return newArr;
};

// console.log(removeFromArray(randomTest, 3, 4));

// Do not edit below this line
module.exports = removeFromArray;
