# Learn_JavaScript

### Data Type

```
boolean : true/false
number  : 20, 30.12
string  : "kittisak"
object  : {firstName:"kittisak", lastName:"hanheam", age:"20"}
array   : ["red", "green", "blue"]
```

### Type Conversion

```
String to Number
- x = parseInt('1.2');
- x = parseFloat('1.2');
- (+...)
Number to String
- "" + x;
- x.toString();
```

### Array

```
let x = new Array();;
let x = Array(m1, m2, m3, ...);

let x = [m1, m2, m3, ...];
```

### Operator Priority

```
1   ()
2   ++, --
3   *, /, %
4   +, -
5   <,<=, >, >=
6   ==, !=
7   &&
8   ||
9   =, +=, -=, *=, /=, %= : right to left
```

### Control Structure

```
Sequence
Condition
Loop
```

### Array Properties

```
Find the number of members and sort them
let x = color.length;
let y = color.sort();

First member and last member
let first = color[0];
let last = color[color.length-1];

Adding members
color.push("gray");
```

### Accessing Array Members with ForEach

```
let colors = [
  "red",
  "green",
  "blue",
  "black",
  "white",
  "yellow",
  "cyan",
  "magenta",
];

colors.forEach(getColor);

function getColor(item) {
  console.log("Color : ", item);
}
```

### Array to String conversion

```
.toString();
.join("*");
color.pop();
let x = color.pop();
```

```
let colors = [
  "red",
  "green",
  "blue",
  "black",
  "white",
  "yellow",
  "cyan",
  "magenta",
];

// let x = colors.toString();
// let x = colors.join("|");
// console.log(x);

console.log(colors);
// colors.pop();
// console.log(colors);

let x = colors.pop();
console.log(x);
```

### Merging Arrays

```
let b = [4, 5, 6];
let c = [7, 8, 9];

a = a.concat(b, c);
console.log(a);
```

### Sorting in an Array

```
let alphabet = ["a", "b", "c"];

alphabet.sort();
alphabet.reverse();
```

```
let points = [20, -5, -2, 40, 100, -500, 150];

console.log(points);

// points.sort(function (a, b) {
//   return a - b;
// });

points.sort(function (a, b) {
  return b - a;
});

console.log(points);
```

### ### Confirm

```
<button onclick="deleteData()">ลบข้อมูล</button>
```

```
function deleteData() {
  let result = confirm("คุณต้องการลบข้อมูลหรือไม่ ?");
  if (result) {
    console.log("ลบข้อมูลเรียบร้อย");
  } else {
    console.log("ยกเลิกการลบ");
  }
}
```
