function infiniteLoop() {
  console.log("Inside");
  try {
    for (var i = 0; i < 100; i++) {
      setTimeout(() => {
        console.log("- " + i);
      }, 0);
    }
  } catch (e) {
    console.log("stuck at -- " + i);
  }
}

// Controlled Solution for infinite loop
function infiniteStack(count = 0) {
  console.log("infinite stack -- " + count);
  setTimeout(() => {
    if (count >= 1000) {
      return;
    }
    infiniteStack(++count);
  }, 0);
}

// infiniteStack();

export default {};
