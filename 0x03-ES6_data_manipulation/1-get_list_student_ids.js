export default function getListStudentIds(array) {
  const lista = [];
  if (Array.isArray(array)) {
    array.forEach((item) => lista.push(item.id));
    return lista;
  }
  return [];
}
