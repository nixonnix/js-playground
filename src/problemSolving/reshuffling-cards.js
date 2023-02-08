function shuffleCards() {
  const arr = [];
  for (let i = 0; i < 52; i++) {
    arr.push(i + 1);
  }
  for (let i = 0; i < arr.length; i++) {
    let swapPOs = Math.floor(Math.random(i) * arr.length);
    let temp = arr[i];
    arr[i] = arr[swapPOs];
    arr[swapPOs] = temp;
  }
  return [...new Set(arr)];
}

console.log(shuffleCards());

function disributeCards(cards, people) {
  const distribution = new Array(people).fill([]).map(() => []);
  const allocation = parseInt(cards.length / people);
  const loopLength = allocation * people;
  for (let i = 0; i < loopLength; i++) {
    distribution[i % people].push(cards[i]);
  }
  return distribution;
}

console.log(disributeCards(shuffleCards(), 6));

export default {};
