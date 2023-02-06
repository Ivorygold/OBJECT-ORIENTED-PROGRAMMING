'use strict';
//using a constructor function to build an object
//difference b/w a constructor function and a regular function is that we call constructor using "NEW"
//is not written in arrow function because it contains this key word
const Person = function (firstName, birthYear) {
  //instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //never create a method inside a constructor function
  /*this.calcAge = function () {
    console.log(2037 - this.birthYear); };*/
};
const jonas = new Person('jonas', 1991);
console.log(jonas);

//this is what happens when we use new.
/** 
 1) New {} is created
 2) function is called on this pointing = { } in No 1
 3) {} is linked to prototype
 4) function automatically return {}
*/

//we can create as many object as possible
const matilda = new Person('Matilda', 1990);
const jack = new Person('Jack', 2000);
console.log(matilda, jack);

//prototypes inheritance helps us to get access to individual functions with out directly writing a method on it
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};
jonas.calcAge();
matilda.calcAge();
jack.calcAge();

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const Mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.brake();
bmw.accelerate();

console.log(`---SPACE---`);

Mercedes.accelerate();
Mercedes.brake();
Mercedes.accelerate();

//ES6 CLASSES
//class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //Method will be added to the prototype property
  calcAge() {
    console.log(2029 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName} how are you doing`);
  }
}

const jessica = new PersonCl('Jessica', 1996);
jessica.calcAge();
jessica.greet();
console.log(jessica);

console.log(jessica.__proto__ === PersonCl.prototype);

//note
// 1. classes are not hoisted, which means that we cant use them before they are declared
// 2. class are also first-class citizens, this means that you parse and return them from a function
// 3. they are executed in strict mood

// Getter and Setters
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
