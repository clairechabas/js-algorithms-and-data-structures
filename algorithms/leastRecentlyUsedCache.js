/**
 * Least Recently Used (LRU) Cache
 */
class LRU {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // We need a Map to keep keys' order
  }

  getItem(key) {
    const item = this.cache.get(key);

    // If item is already in cache, since Map keeps
    // track of insertion order we need to refresh it.
    if (item) {
      this.cache.delete(key);
      this.cache.set(key, item);
    }

    return item;
  }

  putItem(key, val) {
    if (this.cache.has(key)) {
      // Delete existing item to refresh insertion order.
      this.cache.delete(key);
    } else if (this.cache.size === this.capacity) {
      // Delete oldest item in cache if cache is at capacity.
      this.cache.delete(this.oldestItem);
    }

    this.cache.set(key, val);
  }

  get oldestItem() {
    // `keys()` returns the list of keys in cache.
    // `next()` returns the first of those which is the oldest one.
    return this.cache.keys().next().value;
  }
}

// Usage example
const cache = new LRU(5);
cache.putItem("a", 1);
console.log(cache.getItem("a")); // 1
