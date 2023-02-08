function twoDMatrix() {
  var ret = [];
  var count = 0;
  for (var i = 0; i < 3; i++) {
    var temp = [];
    for (var j = 0; j < 3; j++) {
      temp.push(++count);
    }
    ret.push(temp);
  }
  return ret;
}

console.log("Two d matrix", twoDMatrix());

function Reverse2D(arr) {
  var n = arr.length - 1;
  var pos = 0;
  var retArr = [];
  function dLoop(chunk) {
    if (n < 0) return retArr;
    retArr[pos] = chunk.reverse();
    pos++;
    return dLoop(arr[--n]);
  }
  return dLoop(arr[n]);
}

console.log("Reversed Two d matrix", Reverse2D(twoDMatrix()));
