export function ascendingSort(products) {
  const arr = products.slice();
  return arr.sort((a, b) => a.price - b.price);
}

export function descendingSort(products) {
  const arr = products.slice();
  return arr.sort((a, b) => b.price - a.price);
}

export function generateRandomId() {
  let randomNumbers = [];
  for (let index = 0; index < 5; index++) {
    randomNumbers.push(Math.floor(Math.random() * 9));
  }
  return `#${randomNumbers.join("")}`;
}