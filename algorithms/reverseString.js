// Option 1
function reverse(str) {
  if (!Number.isFinite(str.length))
    return "Sorry we cannot process that string, it is too big.";

  return str.split("").reverse().join("");
}

// Option 2: recursively
function reverse(str) {
  if (!Number.isFinite(str.length))
    return "Sorry we cannot process that string, it is too big.";

  if (str.length === 0) return "";

  const lastChar = str[str.length - 1];
  const remainingString = str.substring(0, str.length - 1);
  return lastChar + reverse(remainingString);
}

console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'
