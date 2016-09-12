title: JavaScipt
author:
  name: Koala
  url: https://github.com/KoalaCoders
output: ./javascript/index.html
theme: sudodoki/reveal-cleaver-theme
controls: true


--
### Variables
```
var a;
let b;
const c;

```
--

### Functions
```
function add(a, b) {
  return a + b + 1;
}

let addTwo = (a) => a + 2;

add(1, 2); // 3
addTwo(1); // 3

```

--
### Object
```
{
  name: "Koala",
  action: "Sleep",
  count: 3
}
```
--
### Array
```
[1, 2, "string", {key: value}]
```
--
### Сonditional statements

```
let a = 100;

if (a >= 10) {
  console.log('a >= 10');
} else {
  console.log('a < 10');
}

console.log( a >= 10 ? 'a >= 10' : 'a < 10' )
```
--
### Loop

```
for (let i = 0; i < 10; i++) {
  console.log(i);
}

let i = 0;
while(i < 10) {
  console.log(i++);
}

let j = 0;
do {
  console.log(j++);
} while (j < 10);
```
