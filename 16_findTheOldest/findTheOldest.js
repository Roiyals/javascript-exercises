const findTheOldest = function (arr) {
  let newArr = arr.map((obj) => {
    "yearOfDeath" in obj
      ? (obj.age = obj.yearOfDeath - obj.yearOfBirth)
      : (obj.age = new Date().getFullYear() - obj.yearOfBirth);

    return obj;
  });

  let oldestPerson = newArr.reduce((first, second) => {
    let oldest;
    first.age > second.age ? (oldest = first) : (oldest = second);

    return oldest;
  });

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
