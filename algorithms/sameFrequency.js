function sameFrequency(int1, int2) {
  const int1Arr = int1.toString();
  const int2Arr = int2.toString();
  console.log(int1Arr);

  // si num digits différent return false
  if (int1Arr.length !== int2Arr.length) {
    return false;
  }

  // else on répertorie les occurrence de digits dans un des array
  let int1Digits = {};
  for (const digit of int1Arr) {
    int1Digits[digit] = int1Digits[digit] ? (int1Digits[digit] += 1) : 1;
  }
  console.log(int1Digits);

  // loop on the 2nd array to check each key
  for (const digit of int2Arr) {
    if (!int1Digits[digit]) {
      return false;
    }

    if (int1Digits[digit] === 0) {
      return false;
    }
    int1Digits[digit] -= 1;
  }
  return true;
}

console.log(sameFrequency(34, 14));
