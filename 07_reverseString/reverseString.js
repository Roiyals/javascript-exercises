// let randomTest = "Hello there";

const reverseString = function (string) {
  let stringArr = [];
  for (let i = 0; i < string.length; i++) stringArr.push(string[i]);

  let reversed = stringArr.reverse().join("");

  return reversed;
};

// SHORTER SOLUTION
// const reverseString = function (string) {
//   return string.split("").reverse().join("");
// };

// console.log(reverseString(randomTest));

// Do not edit below this line
module.exports = reverseString;
