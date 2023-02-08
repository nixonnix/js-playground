class Cat {
  color = "yellow";
  #gender = "female";
  constructor(name) {
    this.name = name;
  }
  makeSound(sound) {
    console.log("The " + this.name + " makes " + this.animalSound + " sound.");
  }
  markGender(gender) {
    this.#gender = gender;
  }
}

class Lion extends Cat {
  //   constructor(name) {
  //     super(name);
  //   }
  set sound(sound) {
    this.animalSound = sound;
  }
  get dSound() {
    super.makeSound();
  }
  set color(color) {
    this.color = color;
  }
  set setSender(gender) {
    super.markGender(gender);
  }
  markGender() {
    console.log("called lion ka method!");
  }
}

const sherKhaan = new Lion("Sher Khaan");
sherKhaan.animalSound = "Roar";

console.log(sherKhaan);
console.log(sherKhaan.dSound);
sherKhaan.color = "Orange";
console.log(sherKhaan);
sherKhaan.setSender = "male";
console.log(sherKhaan);
