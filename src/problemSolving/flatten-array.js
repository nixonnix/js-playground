// Same function recursive calling
function flattenArray(arr, opArr = []) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenArray(arr[i], opArr);
    } else {
      opArr.push(arr[i]);
    }
  }
  return opArr;
}

console.log(flattenArray(myArr));

// Recursive calling of child function in main function
function flatThisArr(arr) {
  const opArr = [];
  function flat(ar) {
    for (let i = 0; i < ar.length; i++) {
      if (Array.isArray(ar[i])) {
        flat(ar[i]);
      } else {
        opArr.push(ar[i]);
      }
    }
  }
  flat(arr);
  return opArr;
}

console.log(flatThisArr(myArr));
