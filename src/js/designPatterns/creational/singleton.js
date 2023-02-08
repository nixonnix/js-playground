function Singleton(name) {
  if (typeof Singleton.instance === "object") {
    return Singleton.instance;
  }
  this.name = name;
  Singleton.instance = this;
}

export default Singleton;
