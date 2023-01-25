/*
 * Hash Tables
 * -- Definition
 * Their a key/value pairs data store.
 *
 * Every language has an implementation of hash tables:
 * Python: Dictionaries
 * JS: Objects and Mapss
 * Java, Go, Scala: Maps
 * Ruby: Hashes
 *
 * So in real life you won't create yours from scratch, you'll use
 * what your language has built-in.
 *
 * -- Useful for
 * Used to store key/value pairs, of any data type, and they're unordered.
 * They're fast.
 *
 * -- Complexity
 * Insertion: O(1)
 * Deletion: O(1)
 * Access: O(1)
 */

/**
 * Hash Function
 * To implement hash tables we need a hash function.
 * A hash function is a function which turns an input of any size
 * and return an output of a fixed size.
 *
 * What makes a good hash function?
 * - Fast (constant time)
 * - Distributes things uniformely: doesn't cluster outputs at
 * specific indices, we want things to be evenly spread out
 * Deterministic: the same input must yields the same output
 */
function hash(string, arrayLength) {
  /**
   * Converting the string input to a number
   * Every char has a unicode associated to it
   * string.charCodeAt() gives us this code
   * Note 1: if you substract 96 to the code it gives
   * you the position in the alphabet
   * Note 2: we need a result (which is an index) that is
   * going to be valid and fit inside the array length that
   * we passed. We obtain that by taking the result of the
   * modulo of that value we get a number between 0 and
   * our array length.
   */
  let result = 0;
  /**
   * Using a table length for our hash table which
   * is prime decreases the number of collisions.
   */
  let SOME_PRIME_NUM = 31;
  /**
   * We loop at most 100 chars to force this function
   * to be constant time to keep it fast.
   */
  for (let i = 0; i < Math.min(string.length, 100); i++) {
    let char = string[i];
    let value = char.charCodeAt(0) - 96;
    result = (result * SOME_PRIME_NUM + value) % arrayLength;
  }

  return result;
}

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let result = 0;
    let SOME_PRIM_NUM = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      result = (result * SOME_PRIM_NUM + value) % this.keyMap.length;
    }

    return result;
  }

  set(key, value) {
    // hash the key
    let index = this._hash(key);
    // figure out where to store it:
    // Use separate chaining to store a value in a spot in a nested data structure
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    // hash the key
    let index = this._hash(key);
    // got to that position and retrieve the value
    if (this.keyMap[index]) {
      // we look inside the nested data structure which is at that position
      for (let i = 0; i < this.keyMap[index].length; i++) {
        // We check the key
        if (this.keyMap[index][i][0] === key) {
          // we return the value
          return this.keyMap[index][i][1];
        }
      }
    }

    return undefined;
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          let key = this.keyMap[i][j][0];
          if (!keysArr.includes(key)) {
            // We add the key in the result array
            keysArr.push(key);
          }
        }
      }
    }

    return keysArr;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          let value = this.keyMap[i][j][1];
          if (!valuesArr.includes(value)) {
            // We add the value in the result array
            valuesArr.push(value);
          }
        }
      }
    }

    return valuesArr;
  }
}

let hashTable = new HashTable();
hashTable.set("white", "#fff");
hashTable.set("black", "#000");
hashTable.set("purple", "#dda0dd");
hashTable.set("violet", "#dda0dd");
// console.log(hashTable);
// console.log(hashTable.get("white"));
// console.log(hashTable.get("black"));
// console.log(hashTable.values());
console.log(hashTable.keys());
