function mapArray(arr, callback) {

  if (!arr) {
    console.error('Invalid data');
    return null;
  }

  if (typeof callback !== 'function') {
     console.error('Invalid callback');
     return arr;
  }

  const len = arr.length;
  
  let mappedArray = new Array(len);
  
  for(let i = 0; i < len; i++) {
    mappedArray[i] = callback(arr[i]);
  }

  return mappedArray;
};

// mapArray([1, 2, 3, 4], (a) => a++); 
// => [2, 3, 4, 5]

function map(obj, callback) {

  if (!obj && (typeof obj !== 'object')) {
    console.error('Invalid data');
    return null;
  }

  if (typeof callback !== 'function') {
     console.error('Invalid callback');
     return obj;
  }
  
  let mappedObj = Array.isArray(obj) ? [obj.length] : {};

  for (key in obj) {
    mappedObj[key] = callback(obj[key]);
  }
    
  return mappedObj;
};

// console.log(map({a: 1, b: 5}, (a) => ++a));
// => {a: 2, b: 6}
// console.log(map([1, 5], (a) => ++a));
// => [2, 6]
