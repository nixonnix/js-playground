function Observer() {
  this.subscription = [];
}

Observer.prototype.subscribe = function (subscriber) {
  this.subscription.push(subscriber);
};

Observer.prototype.unSubscribe = function (subscriber) {
  this.subscription = this.subscription.filter(
    (each) => each.name !== subscriber.name
  );
};

Observer.prototype.broadcast = function (message) {
  this.subscription.forEach((subscriber) => {
    subscriber.publish(message);
  });
};

function Subscriber(name) {
  this.name = name;
}

Subscriber.prototype.publish = function (message) {
  const broadcatMsg = this.name + " update is " + message;
  console.log(broadcatMsg);
  return broadcatMsg;
};

const one = new Subscriber("Jack");
const two = new Subscriber("John");
const three = new Subscriber("Roy");

const observer = new Observer();

observer.subscribe(one);
observer.subscribe(two);
observer.subscribe(three);

observer.broadcast("Welocme to this virtual world!!");

observer.unSubscribe(two);

observer.broadcast("Hope All is well!!");

export default Observer;
