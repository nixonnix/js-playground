function eventLoop() {
  //   console.log("in event loop");
  console.log("One");
  setTimeout(() => {
    console.log("two");
  }, 0);
  console.log("three");
  Promise.resolve()
    .then(() => {
      console.log("four");
    })
    .then(() => {
      console.log("eight");
    })
    .then(() => {
      console.log("nine");
    });
  setTimeout(() => {
    console.log("five");
  }, 0);
  Promise.resolve().then(() => {
    console.log("six");
    Promise.resolve().then(() => {
      console.log("seven");
    });
    setTimeout(() => {
      console.log("ten");
    }, 0);
  });
}

// eventLoop(); //One, three, four, six, eight, seven, nine, two, five, ten

export default {};
