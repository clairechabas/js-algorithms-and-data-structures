// Abstraction allows you to hide unnecessary implementation details.

// An abstract class in TS is a class which will never be instanciated on its own.
// There's no such thing as a generic fish.
abstract class Fish {
  swim() {
    return ">>>>>";
  }
}
class Tuna extends Fish {
  face: "🐟";
  // Fish's methods are inherited and therefore we don't need to reimplement them.
  // swim() {
  //   return ">>>>>";
  // }
}
class Shark extends Fish {
  face: "🦈";
  // Fish's methods are inherited and therefore we don't need to reimplement them.
  // swim() {
  //   return ">>>>>";
  // }
}
