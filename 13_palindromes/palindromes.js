const palindromes = function (str) {
  let reversed = str
    .replace(/[^a-zA-Z0-9]/g, "")
    .split("")
    .reverse()
    .join("")
    .toLowerCase();

  let original = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  return original === reversed;
};

// Do not edit below this line
module.exports = palindromes;
