export function ascendingSort(products) {
  const arr = products.slice();
  return arr.sort((a, b) => a.price - b.price);
}

export function descendingSort(products) {
  const arr = products.slice();
  return arr.sort((a, b) => b.price - a.price);
}

export function saveToLocalStorage(name, item) {
  localStorage.setItem(name, JSON.stringify(item));
}
