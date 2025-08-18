const repeatString = function (string, num) {
  if (num < 0) return "ERROR";

  let multiplied = "";
  for (let i = 0; i < num; i++) {
    multiplied += string;
  }

  return multiplied;
};

// Do not edit below this line
module.exports = repeatString;
