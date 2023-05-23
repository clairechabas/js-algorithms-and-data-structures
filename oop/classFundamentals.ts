/**
 * TypeScript classes fundamentals
 */
class Player {
  // Accessible only within its class and its children classes
  protected _score: number = 0;

  constructor(
    public readonly firstName: string,
    public readonly lastName: string
  ) {}

  private secretMethod(): void {
    console.log("You cannot access me outside of my class.");
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  get score(): number {
    return this._score;
  }

  set updateScore(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score cannot be negative.");
    }

    this._score = newScore;
  }
}

class SuperPlayer extends Player {
  // Accessible only within its class
  private isAdmin: boolean = true;

  maxScore() {
    // We can access `_score` because it's `protected` on parent class
    this._score = 9999;
  }
}

const player1 = new Player("Léo", "Chabas");
console.log(player1);

/**
 * Implementing interfaces
 */
interface Colorful {
  color: string;
}
interface Vehicle {
  drive(): void;
}

class Bike implements Colorful, Vehicle {
  constructor(public color: string) {}

  drive() {
    console.log("I'm a vehicle so I can be driven.");
  }
}

const bike1 = new Bike("red");

/**
 * Abstract classes
 *
 * You can't create instances from abstract classes.
 * It defines a blue print for extending classes from it
 * with rules (using the `abstract` keyword) that those child
 * classes must follow.
 * Kind of like an interface but being a class it can implements
 * everything that a class can to add functionality (variables,
 * methods...).
 */
abstract class Employee {
  constructor(public name: string) {}

  abstract getPay(): number;
}

class FullTimeEmployee extends Employee {
  constructor(public name: string, private salary: number) {
    super(name);
  }

  getPay(): number {
    return this.salary;
  }
}
class PartTimeEmployee extends Employee {
  constructor(
    public name: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(name);
  }

  getPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

const betty = new FullTimeEmployee("Betty White", 9500);
const bill = new PartTimeEmployee("Bill Black", 24, 1100);
console.log(betty.getPay());
console.log(bill.getPay());
