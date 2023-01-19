function capitalizeFirst(arrayOfStrings) {
  let newArr = [];

  if (arrayOfStrings.length === 0) return newArr;

  const capitalized =
    arrayOfStrings[0][0].toUpperCase() + arrayOfStrings[0].substring(1);
  newArr.push(capitalized);

  return newArr.concat(capitalizeFirst(arrayOfStrings.splice(1)));
}
console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
