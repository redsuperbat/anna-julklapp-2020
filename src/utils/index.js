export function chooseRandom(arr, num = 1) {
  if (!arr.length) return [];
  const arrCopy = [...arr];
  const result = [];
  for (let i = 0; i < num; i++) {
    const randomIndex = Math.floor(Math.random() * arrCopy.length);
    if (result.indexOf(arrCopy[randomIndex]) !== -1) {
      continue;
    }
    result.push(arrCopy.splice(randomIndex, 1)[0]);
  }
  return result;
}
