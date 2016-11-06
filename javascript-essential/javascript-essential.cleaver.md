title: JavaScipt
author:
  name: Koala
  url: https://github.com/KoalaCoders
output: ./javascript-essential/index.html
style: style.css
theme: IgorMotorny/cleaver-koala
controls: true


--
#JavaScript

--
##Интерпретируемый

--
##Что умеет JavaScript?

--
##Что НЕ умеет JavaScript?

--
##В чём уникальность JavaScript?

--
##ECMAScript5

--
##ECMAScript6 (ES6, ES2015)

--
### CoffeeScript
### TypeScript
### Dart

--
## Среда разработки

--
#Hello World!

--
## Подключение скриптов

--
##Переменные
###var, let, const

--
##Типы данных

--
###Число «number»
###Строка «string»
###Булевый (логический) тип «boolean»
###Специальное значение «null»
###Специальное значение «undefined»
###Объекты «object»

--
##Операторы

--
##Условные операторы

--
```js
if (a == b) {
  return true;
}
```
--
```js
if (a > b) {
  return 1;
} else if (a == b) {
  return 0;
} else {
  return -1;
}
```

--
```js
var a = b > c ? b : c;
```

--
##Логические операторы

--
#|| (ИЛИ)

--
#&& (И)

--
#!(НЕ)

--
##Циклы
```js
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```
--
##Функции

--
```js
function showMessage() {
  alert( 'message' );
}
```

--
##Области видимости

--
##Function Expression
```js
var sum = function(a, b) {
  return a + b;
}
```

--
##Function Declaration
```js
function sum(a, b) {
  return a + b;
}
```
--
##Методы

--
##Числа
```js
parseInt();  
parseFloat();
toString(система счисления);
num.toFixed(precision);
```

--
##Строки
```js
str.length;
toLowerCase();
toUpperCase();
str.indexOf("string");

```
--
##Объекты
```js
var key = "prop";
obj[key] = 5
```
--
##Массивы
```js
arr.split();
arr.join();
arr.splice(index[, deleteCount, elem1, ..., elemN]);
arr.slice();
arr.reverse();
arr.indexOf();
```
--
##Перебирающие методы
forEach, filter, map, every/some, reduce/reduceRight
