export default function getListStudentIds(array) {
  const lista = [];
  if (Array.isArray(array)) {
    const myMap = new Map();
    for (const item of array) {
      myMap.set(item.id);
    }
    for (const key of myMap.keys()) {
      lista.push(key);
    }
  }
  return lista;
}
