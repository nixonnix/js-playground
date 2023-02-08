/**
 * Run-length encoding is a fast and simple method of encoding strings.
 * The basic idea is to represent repeated successive characters as a single count and character.
 * For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".
 */

function runLengthEncoding(str) {
  const opHolder = [[]];
  for (let i = 0; i < str.length; i++) {
    if (i > 0 && str.charAt(i) !== str.charAt(i - 1)) {
      opHolder.push([str.charAt(i)]);
    } else {
      opHolder[opHolder.length - 1].push(str.charAt(i));
    }
  }

  return opHolder.reduce((acc, curr) => {
    return acc + curr.length + curr[0];
  }, "");
}

console.log("runLengthEncoding", runLengthEncoding("AAAABBBCCDAA"));

export default runLengthEncoding;
