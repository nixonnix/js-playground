function arrChunck(arr, n) {
  const opArr = [];
  let chunk = [];
  for (var i = 0; i < arr.length; i++) {
    if (chunk.length === 0 || chunk.length === n) {
      chunk = [arr[i]];
      opArr.push(chunk);
    } else {
      chunk.push(arr[i]);
      opArr[opArr.length - 1] = chunk;
    }
  }
  return opArr;
}

console.log(arrChunck([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));
console.log(arrChunck([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(
  arrChunck(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    6
  )
);
