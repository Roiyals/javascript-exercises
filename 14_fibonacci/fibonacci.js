const fibonacci = function (x) {
  if (x < 0) {
    return "OOPS";
  }

  let fib = [1, 1];
  let num = 0;

  for (let i = 1; i <= x; i++) {
    let pushFib = fib[i] + fib[i - 1];
    fib.push(pushFib);

    num = fib[x - 1];
  }

  return num;
};

// Do not edit below this line
module.exports = fibonacci;
