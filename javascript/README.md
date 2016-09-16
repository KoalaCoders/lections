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
