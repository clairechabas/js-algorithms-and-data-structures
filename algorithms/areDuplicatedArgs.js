// OPTION 1
function areThereDuplicates(...args) {
  const elements = {};

  for (const el of args) {
    if (elements[el]) {
      return true;
    }

    elements[el] = 1;
  }

  return false;
}
console.log(areThereDuplicates("a", "a", "b"));

// OPTION 2
function areThereDuplicates(...args) {
  return new Set(args).size === args.length;
}
console.log(areThereDuplicates("a", "a", "b"));
console.log(areThereDuplicates(1, 4, 3));
