function isAnagram(str1, str2) {
  const map1 = {};
  const map2 = {};
  for (let i = 0; i < str1.length; i++) {
    if (map1[str1[i]]) {
      map1[str1[i]] = map1[str1[i]] + 1;
    } else {
      map1[str1[i]] = 1;
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (map2[str2[i]]) {
      map2[str2[i]] = map2[str2[i]] + 1;
    } else {
      map2[str2[i]] = 1;
    }
  }

  let isAnagarm = true;

  for (let key in map1) {
    if (map2[key] !== map1[key]) {
      isAnagarm = false;
      break;
    }
  }
  return isAnagarm;
}

console.log(isAnagram("hello", "loleh")); // true
console.log(isAnagram("wonderful", "luernowdf")); //true
console.log(isAnagram("closest", "seolst")); //false
