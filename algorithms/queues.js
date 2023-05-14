/**
 * Queues
 *
 */

/**
 * Number of Recent Calls
 *
 * You have a RecentCounter class which counts the number of recent requests
 * within a certain time frame.
 *
 * Implement the RecentCounter class:
 * - RecentCounter() Initializes the counter with zero recent requests.
 * - int ping(int t) Adds a new request at time t, where t represents some
 * time in milliseconds, and returns the number of requests that has happened
 * in the past 3000 milliseconds (including the new request).
 * Specifically, return the number of requests that have happened in the inclusive
 * range [t - 3000, t].
 *
 * It is guaranteed that every call to ping uses a strictly larger value of t
 * than the previous call.
 */
var RecentCounter = function () {
  this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  while (this.queue.length && this.queue[0] < t - 3000) {
    this.queue.shift();
  }
  this.queue.push(t);

  return this.queue.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

/**
 * Moving Average from Data Stream
 *
 * Given a stream of integers and a window size, calculate the moving average 
 * of all integers in the sliding window.
 * 
 * Implement the MovingAverage class:
 * - MovingAverage(int size) Initializes the object with the size of the window size.
 * - double next(int val) Returns the moving average of the last size values of the stream.

 */
// Solution - 95ms - Beats 88%
/**
 * @param {number} size
 */
var MovingAverage = function (size) {
  this.size = size;
  this.window = [];
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  if (this.window.length === this.size) {
    this.window.shift();
  }
  this.window.push(val);
  console.log(this.window);

  let total = 0;
  for (let i = 0; i < this.window.length; i++) {
    total += this.window[i];
  }
  console.log(total);

  return total / this.window.length;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
