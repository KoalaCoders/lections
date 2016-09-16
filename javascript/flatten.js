function flatten(arr) {
  if (!arr && !arr.length) return arr;
  
  let res = [];

  arr.forEach((el) => {
    res = res.concat((typeof el != 'object') ? el : flatten(el))
  });
  
  return res;
}
