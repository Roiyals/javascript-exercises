const sumAll = function (a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "ERROR";
  }

  let min = Math.min(a, b);
  let max = Math.max(a, b);
  let sum = 0;

  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    return "ERROR";
  }

  if (min >= 0 && max >= 0) {
    for (let i = min; i <= max; i++) {
      sum += i;
    }
  } else {
    return "ERROR";
  }

  return sum;
};

// console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
