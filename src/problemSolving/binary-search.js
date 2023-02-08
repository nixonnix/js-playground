function binarySearch_recursive(arr, num, startI = 0, endI = arr.length - 1) {
  const result = {};
  // Find the mid of array
  const mid = Math.floor((startI + endI) / 2);
  // If num is same as number at mid, return the number
  if (num === arr[mid]) return { ...result, found: true, index: mid };

  // if start index is >= end index, return not found
  if (startI >= endI) {
    return -1;
  }

  // If value at mid is less than number, search in the right of mid i.e,
  // start index is mid + 1, and end will be as it is
  if (arr[mid] < num) {
    return binarySearch_recursive(arr, num, mid + 1, endI);
  }

  // If value at mid is greater than number, search in the left of mid i.e,
  // end index will be end -1 and start will be as it is
  if (arr[mid] > num) {
    return binarySearch_recursive(arr, num, startI, mid - 1);
  }
}

function binarySearch_iterative(arr, num) {
  let startI = 0;
  let endI = arr.length - 1;
  const result = {};
  while (startI <= endI) {
    let mid = Math.floor((startI + endI) / 2);
    if (arr[mid] === num) {
      return { ...result, found: true, index: mid };
    }

    if (arr[mid] < num) {
      startI = mid + 1;
    }
    if (arr[mid] > num) {
      endI = mid - 1;
    }
  }
  return -1;
}

console.log(
  "binarySearch",
  binarySearch_recursive([1, 3, 4, 6, 9, 11, 12, 14, 15, 20], 15),
  binarySearch_iterative([1, 3, 4, 6, 9, 11, 12, 14, 15, 20], 15)
);
console.log(
  "binarySearch",
  binarySearch_recursive([1, 3, 4, 6, 9, 11, 12, 14, 15, 20], 55),
  binarySearch_iterative([1, 3, 4, 6, 9, 11, 12, 14, 15, 20], 55)
);
console.log(
  "binarySearch",
  binarySearch_recursive([1, 3, 4, 6, 9, 11, 12, 14, 15, 20], -10),
  binarySearch_iterative([1, 3, 4, 6, 9, 11, 12, 14, 15, 20], -10)
);
console.log(
  "binarySearch",
  binarySearch_recursive([1, 3, 4, 6, 9, 11, 12, 14, 15, 20], 6),
  binarySearch_iterative([1, 3, 4, 6, 9, 11, 12, 14, 15, 20], 6)
);
console.log(
  "binarySearch",
  binarySearch_recursive([1, 3, 4, 6, 9, 11, 12, 14, 15, 20], 1),
  binarySearch_iterative([1, 3, 4, 6, 9, 11, 12, 14, 15, 20], 1)
);
console.log(
  "binarySearch",
  binarySearch_recursive([1, 3, 4, 6, 9, 11, 12, 14, 15, 20], 20),
  binarySearch_iterative([1, 3, 4, 6, 9, 11, 12, 14, 15, 20], 20)
);
console.log(
  "binarySearch",
  binarySearch_recursive([1, 3, 4, 6, 9, 11, 12, 14, 15, 20], 5),
  binarySearch_iterative([1, 3, 4, 6, 9, 11, 12, 14, 15, 20], 5)
);

export default {};
