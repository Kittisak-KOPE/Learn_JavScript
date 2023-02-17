# Learn_JavaScript

## JavaScript ES6

### Rest Operator

```
const addUser = (name, last, ...city) => {
  return name + " " + last + " " + city;
};

console.log(addUser("kittisak", "hanheam", "bangkok"));
console.log(addUser("kittisak", "hanheam", "bangkok", "kornkean"));
```

```
const addMessage = (first, ...message) => message.map((m) => first + message);
console.log(addMessage("Hello", "JS", "React"));
```

```
const addNumber = (...number) => {
  return number.reduce((first, current) => {
    return first + current;
  });
};

console.log(addNumber(1, 2, 3, 4, 5));
```

### Spread Operator

```
let fruit = ["mango", "watermelon"];
let newfruit = [...fruit, "durian", "mangosteen"];
console.log(newfruit);
```

```
let datas = { name: "kittisak", lastname: "hanheam" };
let newdatas = { ...datas, phone: "0934213565" };
console.log(newdatas);

let newphone = { ...newdatas, phone: "0857683456" };
console.log(newphone);
```

### Destructuring Object

```
let player = {
  name: "kittisak",
  skill: "C, C++, C#, Java, JavaScript, Python",
};

let { name, skill } = player;
console.log(`name = ${name}, skill = ${skill}`);
```

### Computed Property Name

```
let name = "Cake";
let menu = {
  [name]: name + " ส้ม",
  [name + "Mix"]: "ผลส้ม",
};
console.log(menu);
```

### Shorthand Property & Method

```
let name = "kittisak";
let lname = "hanheam";

let user = {
  name,
  lname,
};

console.log(user);
```

```
function user(name, last, age) {
  return {
    name,
    last,
    age,
  };
}

console.log(user("kittisak", "hanheam", 12));
```

### Class

แบบเดิม

```
function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.SayHi = function () {
  console.log("Hello = " + this.name + "Age = " + this.age);
};

var user1 = new User("kittisak", 6);
user1.SayHi();
```

แบบใหม่

```
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  SayHi() {
    console.log("Hello = " + this.name + " Age = " + this.age);
  }
}

let user1 = new User("kittisak", 4);
user1.SayHi();
```

### inheritance

```
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
```
