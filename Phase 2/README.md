# Learn_JavaScript

### HTML Document Object Model

```
Access Element via Id, Tag, Class
document.getElementById("idName");
document.getElementByTagName("tagName");
document.getElementByClassName("className");

Change content
HTML            : element.innerHTML
Text            : element.innerText
Style Element   : element.style.properties = value

Execution via Method
element.setAttribute(attribute, value)
```

```
<p id="demo">kittisak</p>
<p class="myjs">js basic</p>
<p>css basic</p>
<button onclick="displayText()">แสดงข้อมูล</button>

<script src="app.js"></script>
```

```
// let a = document.getElementById("demo");
let a = document.querySelector("#demo");

// console.log(a);

// let b = document.getElementsByTagName("p");
// console.log(b);

let x = 10;
let y = 20;
function displayText() {
  //   a.innerText = "สอน JavaScript เบื้องต้น";

  //   a.innerHTML =
  //     "<strong>แสดงข้อมูลในตัวแปร </br> x = </strong>" + x + "และตัวแปร y = " + y;
  //   a.style.color = "red";

  a.innerHTML = `<strong>แสดงข้อมูลในตัวแปร </br> x = </strong> ${x} และตัวแปร y = ${y}`;
}

// let c = document.querySelector(".myjs");
// let d = document.querySelectorAll("p");
// console.log(c);
// console.log(d);
```

#### Execution via Method

```
<div class="light">
    <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, et.
    </p>
</div>
<button onclick="darkMode()">โหมดกลางคืน</button>
<button onclick="lightMode()">โหมดกลางวัน</button>
```

```
.light {
  background-color: orange;
  color: black;
}
.dark {
  background-color: purple;
  color: white;
}
```

```
const box = document.querySelector(".light");

function lightMode() {
  box.setAttribute("class", "light");
}

function darkMode() {
  box.setAttribute("class", "dark");
}
```

### DOM Nodes

```
document.createElement(element)
document.removeChild(element)
document.appendChild(element)
document.replaceChild(new, old)
```

#### Access Element via x[y].innerHTML

```
<p>Hello World</p>
<p>JavaScript</p>
<p>KongRuksian</p>
```

```
const textAll = document.querySelectorAll("p");
// console.log(textAll[0]);
// console.log(textAll[0].innerHTML);

let message = textAll[0].innerHTML;
console.log(message);
```

#### createElement & appendChild

```
<button onclick="addItem()">เพิ่มรายการ</button>
<ul id="menu"></ul>
```

```
const menu = document.getElementById("menu");
let count = 1;

function addItem() {
  const item = document.createElement("li");
  item.innerText = "Item " + count++;

  menu.appendChild(item);
}
```

#### removeChild & replaceChild

```
<button onclick="deletItem()">ลบ</button>
<ul id="menu">
    <li id="item-1">A</li>
    <li id="item-2">B</li>
    <li id="item-3">C</li>
    <li id="item-4">D</li>
</ul>
```

```
const menu = document.getElementById("menu");
const item = document.getElementById("item-3");

function deletItem() {
  menu.removeChild(item);
}

const newItem = document.createElement("li");
const itemB = document.getElementById("item-2");

newItem.innerText = "X";
menu.replaceChild(newItem, itemB);
```

### DOM CSS Add & Remove Class

```
element.classList.add("class");
element.classList.remove("class");
element.classList.toggle("class");
element.classList.contains("class");
```

```
<button onclick="addDarkMode()">เพิ่ม style</button>
<button onclick="removeDarkMode()">ลบ style</button>
<button onclick="switchMode()">สลับ style</button>
<div id="box">
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, soluta
    minima omnis libero nisi est!
    </p>
</div>
```

```
.darkMode {
  border: 1px solid #fff;
  background-color: black;
  color: white;
  padding: 30px;
  margin: 10px;
}
```

```
const box = document.getElementById("box");
let status;

function addDarkMode() {
  box.classList.add("darkMode");
}

function removeDarkMode() {
  box.classList.remove("darkMode");
}

function switchMode() {
  box.classList.toggle("darkMode");
  status = box.classList.contains("darkMode");
  if (status) {
    box.style.color = "yellow";
  } else {
    box.style.color = "red";
  }
}
```

### DOM Event

```
onfocus = ""    : select, text, textarea
onblur = ""     : select, text, textarea
onchange = ""   : select, text, textarea
onselect = ""   : select, text, textarea
onsubmit = ""   : form
onMouseover = "": a, div
onMouseout = "" : a, div
onclick = ""    : a, button, checkbox, radio, reset, submit
onload = ""     : body
onunload = ""   : body
```

#### onfocus & onblur

```
<input
type="text"
placeholder="ป้อนชื่อของคุณ"
onfocus="highlight(this)"
onblur="unhighlight(this)"
/>
```

```
function highlight(obj) {
  obj.style.background = "yellow";
}

function unhighlight(obj) {
  obj.style.background = "black";
}
```

#### onchange

```
<select name="" id="menu" onchange="getMenu()">
    <option value="JavaScript">JavaScript</option>
    <option value="Python">Python</option>
    <option value="Bootstrap">Bootstrap</option>
</select>
<p id="display"></p>
```

```
function getMenu() {
  const menu = document.getElementById("menu");
  const display = document.getElementById("display");
  //   console.log(menu.value.toUpperCase());
  display.innerText = menu.value.toUpperCase();
}
```

#### onmouseover & onmouseout

```
<a href="" onmouseover="highlight(this)" onmouseout="unhighlight(this)">Menu 1</a>
```

```
function highlight(obj) {
  obj.style.background = "yellow";
}
function unhighlight(obj) {
  obj.style.background = "red";
}
```

#### onload

```
<body onload="welcome()">
```

```
function welcome() {
  alert("Welcome");
}
```

### EventListener

```
element.addeEventListener(event, callback)
```

```
<button id="btn">แจ้งเตือน</button>
<select name="" id="menu">
    <option value="JavaScript">JavaScript</option>
    <option value="Python">Python</option>
    <option value="Bootstrap">Bootstrap</option>
</select>
<p id="display"></p>
```

```
const menu = document.getElementById("menu");
const display = document.getElementById("display");
const btn = document.getElementById("btn");

menu.addEventListener("change", getMenu);
btn.addEventListener("click", showWelcome);

function getMenu() {
  //   console.log(menu.value);
  display.innerText = menu.value;
}

function showWelcome() {
  alert("ยินดีต้อนรับเข้าสู่หน้าเว็ป");
}
```
