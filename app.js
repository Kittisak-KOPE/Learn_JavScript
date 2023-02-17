class Admin {
  constructor() {
    console.log("Call Constructor");
  }
  isPermission() {
    console.log("Read Write Data From Database");
  }
}

class User extends Admin {
  constructor(name, age) {
    super();
    this.name = name;
    this.age = age;
  }
  SayHi() {
    console.log("Hello = " + this.name + " Age = " + this.age);
  }
}

let user1 = new User("kittisak", 4);
user1.SayHi();
user1.isPermission();
