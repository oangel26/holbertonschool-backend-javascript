export default function appendToEachArrayValue(array, appendString) {
  let cont = -1;
  const newArray = [];
  for (const idx of array) {
    cont += 1;
    const value = array[idx];
    newArray[cont] = appendString + value;
  }

  return newArray;
}
