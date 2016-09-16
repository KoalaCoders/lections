# JavaScript basic
## Leftpad
```javascript
leftPad('foo', 5)
// => "  foo" 
 
leftPad('foobar', 6)
// => "foobar" 
 
leftPad(1, 2, 0)
// => "01" 
 
leftPad(17, 5, 0)
// => "00017" 
```
## Map
```javascript
map([1, 2, 3, 4], (el) => ++el)
// => [2, 3, 4, 5]
```

## Flatten
```javascript
flatten([1, [2, 3], [[4], [5, 6]]);
// => [1, 2, 3, 4, 5, 6]
```
## Fallback
```javascript
let obj = { 
 id: 0,
 info: {
  name: 'Alex',
  surname: '',
  age: null
 }, 
 description: ''
};

let default = {
 id: 2,
 info: {
  name: 'default name',
  surname: 'default surname',
  age: 22
  },
 description: 'default description'
}

fallback(obj, default);
// => { id: 1, info: { name: 'Alex', surname: 'default surname', age: 22 }, description: 'default description' }
```
