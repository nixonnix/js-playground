function Cat(name) {
  this.name = name;
}

Cat.prototype.makeSound = function (sound) {
  console.log("The " + this.name + " makes " + this.animalSound + " sound.");
};

function Lion(name) {
  // Cat.call(this, name);
  this.sup = Cat;
  this.sup(name);
  delete this.sup;
}

Lion.prototype.makeGender = function () {
  console.log("called lion ka method!");
};

Object.defineProperty(Lion.prototype, "sound", {
  configurable: true,
  enumerable: true,
  set(sound) {
    this.animalSound = sound;
  },
  get() {
    this.__proto__.__proto__.makeSound.call(this);
  },
});
Object.defineProperty(Lion.prototype, "color", {
  configurable: true,
  enumerable: true,
  set(color) {
    this.animalColor = color;
  },
});

Object.setPrototypeOf(Lion.prototype, Cat.prototype);

const sherKhaan = new Lion("Sher Khaan");
sherKhaan.sound = "Roar";
// sherKhaan.color = 'Orange';
console.log(sherKhaan);
console.log(sherKhaan);
// console.log(sherKhaan.sound);
