const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:"${actual} !==  ${expected}`);
  }
};

const eqObjects = function (object1, object2) {


  if (Object.keys(object1.length) !== Object.keys(object2.length)) {
    return false
  }
  for (const letter in object1) {
    if (object1[letter] === ob) {

    }
  }
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertEqual(ab, abc),); // => false
assertEqual(ab, ba); // => true

// could this part of the code be wrong im stuck on the first step//
console.log(Object.keys(object1.length))