title: JavaScipt
author:
  name: Koala
  url: https://github.com/KoalaCoders
output: ./javascript/index.html
theme: IgorMotorny/cleaver-koala
style: style.css
controls: true


--
### Data types
```js
typeof undefined // "undefined"

typeof 1 // "number"

typeof true // "boolean"

typeof "str" // "string"

typeof {} // "object"

typeof [] // "object"

typeof null // "object"

typeof function(){} // "function"
```

--
### Variables
```js
var a = 1;
let b = 'str';
const c = [1, 2, 3];
```
--
### Boolean
```js
false == false; // true
null == false; // true
undefined == false; // true
NaN == false; // true
'' == false; // true
0 == false; // true

false === false; // false
null === false; // false

```
--
### Functions
```javascript
function add(a, b) {
  return a + b;
}

let addTwo = (a) => a + 2;

add(1, 2); // 3
addTwo(1); // 3

```
--
### Classes
```js
class User {
  constructor(firstName) {
    this.firstName = firstName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(newValue) {
    [this.firstName, this.lastName] = newValue.split(' ');
  }

  ["test".toUpperCase()]() {
    alert("PASSED!");
  }
};
```
--
### Object
```javascript
new Object(); // => {}
{}; // => {}

let obj = {a: 'b'};
obj.a; // => 'b'
obj['a']; // => 'b'
```
--
### Object
```js
let obj = {a: 'b', b: 'a'};
for (key in obj) {
  console.log(key, obj[key]);
  // => 'a', 'b'
  // => 'b', 'a'
}
```
--
### Array
```javascript
[1, 2, "string", {key: 'value'}] // => [1, 2, "string", {key: 'value'}]

new Array(1, 2, "string", {key: 'value'}), // => [1, 2, "string", {key: 'value'}]

new Array(4), // => [undefined, undefined, undefined, undefined]
```
--
### Array
```js
'1, 2, 3, 4'.split(', '); // => ['1', '2', '3', '4']
['1', '2', '3', '4'].join(' '); // => '1 2 3 4'

let arr = [1, 2, 3, 4];
arr.splice(1, 2); // => [2, 3]
arr; // => [1, 4];

[1, 2, 3, 4].slice(0, 2); // => [1, 2]
[1, 2, 3, 4].reverse(); // => [4, 3, 2, 1]

```
--
### Сonditional statements

```javascript
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

```javascript
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
