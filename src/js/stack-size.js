function getStackSize(count = 0) {
  try {
    getStackSize(++count);
  } catch (e) {
    console.log(count);
  }
}
getStackSize();

export default {};
