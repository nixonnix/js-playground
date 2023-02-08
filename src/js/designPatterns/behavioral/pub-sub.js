function EventEmitter() {
  this.subscribers = {};
  this.subscribe = function (name, callback) {
    if (this.subscribers[name]) {
      this.subscribers[name].push(callback);
    } else {
      this.subscribers[name] = [callback];
    }
  };
  this.on = function (event, ...args) {
    if (this.subscribers[event]?.length > 0) {
      this.subscribers[event].forEach((callback) => {
        callback(...args);
      });
    }
  };
}
