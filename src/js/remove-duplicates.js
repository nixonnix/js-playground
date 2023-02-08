const arr = [1, 1, 1, 1, 3, 3, 3, 4, 4, 4, 2, 2, 2, 5, 5, 5, 4, 4, 4, 4];

// Get Unique Values out of duplicate values
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr);

const arrObj = [
  { name: "Hola" },
  { name: "Pola" },
  { name: "Rola" },
  { name: "Hola" },
  { name: "Dola" },
  { name: "Pola" },
];

// Get Unique values out of array of duplicate objects
const uniqueArrObj = [
  ...new Map(arrObj.map((val) => [val["name"], val])).values(),
];
console.log(uniqueArrObj);
