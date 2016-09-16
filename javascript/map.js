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

// map([1, 2, 3, 4], (a) => a++);

function map(obj, callback) {

  if (!obj ) {
    console.error('Invalid data');
    return null;
  }

  if (typeof callback !== 'function') {
     console.error('Invalid callback');
     return obj;
  }
  
  if (Array.isArray(obj)) {
    const len = arr.length;
  
    let mappedArray = new Array(len);
  
    for(let i = 0; i < len; i++) {
      mappedArray[i] = callback(obj[i]);
    }

    return mappedArray;
  } else {
    let mappedObj = {};

    for (key in obj) {
      mappedObj[key] = callback(obj[key]);
    }
    
    return mappedObj;
  }
  
};
