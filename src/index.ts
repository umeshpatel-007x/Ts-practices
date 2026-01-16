let username: string = "Umesh";
let age: number = 28;

let isTriggered: boolean = false;

let scores: number[] = [10, 20, 30];

let names: Array<string> = ["Amit", "Umesh"];

let user: [number, string, boolean];

user = [1, "Umesh", true];

let value: any = 10;

value = "hello";
value = true;

let data: unknown;

data = "Hello";
data = 100;

// Type Inference

let count = 10; // inferred as number
let userName = "Umesh"; // inferred as string
let isActive = true; // inferred as boolean

// Type Aliases

type UserId = number;

let id: UserId = 101;

// Union Type Alias

type Status = "success" | "error" | "loading";

let apiStatus: Status = "success";

// Function with Parameter & Return Types

function add(a: number, b: number): number {
  return a + b;
}

const greet = (name: string): string => {
  return `Hello ${name}`;
};

function logMessage(message: string): void {
  console.log(message);
}

// Optional Parameters

function getUserName(firstName: string, lastName?: string): string {
  return lastName ? `${firstName} ${lastName}` : firstName;
}

// Default Parameters

function greeet(name: string = "Guest"): string {
  return `Hello ${name}`;
}

//  Interfaces

interface User {
  id: number;
  name: string;
  isActive: boolean;
}

// Interface for a Class

interface EmployeeContract {
  id: number;
  name: string;
  getDetails(): string;
}

class Employee implements EmployeeContract {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  getDetails(): string {
    return `${this.id} - ${this.name}`;
  }
}

// Access Modifiers
class Person {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const p = new Person("Umesh");
console.log(p.name);

class BankAccount {
  private balance: number = 0;

  deposit(amount: number) {
    this.balance += amount;
  }
}

const account = new BankAccount();
// Not accessbile

class Animal {
  protected type: string = "Animal";
}

class Dog extends Animal {
  getType() {
    return this.type;
  }
}

const dog = new Dog();
// dog.type. will throw Error

// Utility Types

// Partial
//Makes all properties optional

interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;

// Readonly<T>
// Prevents modification of properties

type ReadonlyUser = Readonly<User>;

// Pick<T, K>
// Select specific properties

type UserPreview = Pick<User, "id" | "name">;

const preview: UserPreview = {
  id: 1,
  name: "Umesh"
};

// Omit<T, K>
// Remove specific properties

type UserWithoutEmail = Omit<User, "email">;

// const userdata: UserWithoutEmail = {
//   id: 1,
//   name: "Umesh"
// };
