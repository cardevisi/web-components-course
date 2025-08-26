class Person {
  _name;
  _age;

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value;
  }

  constructor(parameters) {
    this._name = parameters.name;
    this._age = parameters.age;
  }
}

export default Person;
