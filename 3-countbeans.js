function countBs(str) {
  return countChar(str, 'B');
}

function countChar(str, c) {
  var count = 0;
  var len = str.length;
  for (var i = 0; i < len; i++) {
    if (str.charAt(i) == c)
      count++;
  }
  return count;
}

console.log(countBs('AbbbBBb'));
