function flatten(arr) {
  if (!arr && !arr.length) return arr;
  
  let res = [];

  arr.forEach((el) => {
    res = res.concat((Array.isArray(el)) ? el : flatten(el))
  });
  
  return res;
}
