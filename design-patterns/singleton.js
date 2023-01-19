let instance;
let counter = 0;

class Counter {
  constructor() {
    if (instance) {
      throw new Error("An instance already exist.");
    }

    instance = this;
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return counter++;
  }

  decrement() {
    return counter--;
  }
}

const singleCounter = Object.freeze(new Counter());

export default singleCounter;
