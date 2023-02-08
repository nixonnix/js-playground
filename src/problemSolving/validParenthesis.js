function validParenthesis(str) {
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const valids = ["(", ")", "[", "]", "{", "}"];

  const stq = [];

  for (let char of str) {
    if (map[char]) {
      stq.push(map[char]);
    } else if (valids.includes(char)) {
      let poppedValue = stq.pop();
      if (poppedValue !== char) {
        return false;
      }
    }
  }
  return stq.length ? false : true;
}

console.log("validParenthesis --- [{()}]", validParenthesis("[{()}]")); // true
console.log("validParenthesis --- [{(ASDFGH)}]"); //true
console.log(
  "validParenthesis --- [{AS}(DF)asssfs[dfsfsf{fsfd(f)(dd)wew}rer]w]",
  validParenthesis("[{AS}(DF)asssfs[dfsfsf{fsfd(f)(dd)wew}rer]w]")
); //true
console.log("validParenthesis --- [(])", validParenthesis("[(])")); // false
console.log("validParenthesis --- ''", validParenthesis("")); // true

console.log(
  "validParenthesis --- '{{h(eu)fg}}'",
  validParenthesis("{{h(eu)fg}}")
); // true

console.log("validParenthesis --- [{()}(]", validParenthesis("[{()}(]")); // false
