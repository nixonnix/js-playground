/**
 * Write a function that should return the first alphabet of each word in capitalized format.
 * "A beautiful cat is passing by!!" => "A Beautiful Cat Is Passing By!!"
 */

function capitalization(str) {
  if (typeof str !== "string") {
    throw new TypeError("Expected a string but found - " + typeof str);
  }

  const target = str
    .split(" ")
    .reduce((acc, curr) => {
      const processed = curr.replace(
        curr.charAt(0),
        curr.charAt(0).toUpperCase()
      );
      acc.push(processed);
      return acc;
    }, [])
    .join(" ");
  return target;
}

console.log(
  "Capitalized --- ",
  capitalization("A beautiful cat is passing by!!")
);
