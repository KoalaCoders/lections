function leftPad(str, len, sumbol = ' ') {
  if (str.length >= len)
    return str;
  
  let buff = [];

  const padLength = len - str.length;

  for (let i = 0; i < padLength; i++) {
    buff.push(sumbol);
  }
  
  buff.push(str);
  
  return buff.join('');
}
