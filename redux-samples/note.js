function Calculator() {
  this.num1;
  this.num2;

  this.read = function() {
    this.num1 = Number(prompt("Enter First Number"));
    this.num2 = Number(prompt("Enter Second Number"));
  }

  this.sum = function() {
    return this.num1 + this.num2;
  }

  this.mul = function() {
    return this.num1 * this.num2;
  }
}

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    const inputNumber = Number(prompt("Number?"));
    this.value += inputNumber;
  }
}