// State
// An object can behave differently based on a finite number of state.

// Use might have used switch statement for such use case until now,
// but code like this doesn't scale very well:
class HumanWithSwitch {
  think(mood) {
    switch (mood) {
      case "happy":
        return "I am happy :)";
      case "sad":
        return "I am sad :(";
      default:
        return "I am neutral :|";
    }
  }
}

// The state pattern allows you to start with 1 base class and provide it with
// different functionality based on its state.
// The goal is to make an object's behavior predictable based on its state.
interface State {
  think(): string;
}

class HappyState implements State {
  think() {
    return "I am happy :)";
  }
}
class SadState implements State {
  think() {
    return "I am sad :(";
  }
}

class Human {
  state: State;

  constructor() {
    this.state = new HappyState();
  }

  think() {
    return this.state.think();
  }

  changeState(newState) {
    this.state = newState;
  }
}
