function Pizza(name, price) {
  this.name = name;
  this.price = price;
}

function CheezeBurst(pizza) {
  pizza.name = pizza.name + " - cheesy";
  const prevPrice = pizza.price;
  pizza.price = prevPrice + 10;
  return pizza;
}

const plainPizza = new Pizza("Plain", 100);

console.log(plainPizza);

const cheezyPizza = CheezeBurst(plainPizza);

console.log(cheezyPizza);
