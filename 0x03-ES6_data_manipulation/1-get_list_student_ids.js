export default function getListStudentIds(array) {
  const lista = [];
  if (Array.isArray(array)) {
      return array.map((item) => item.id);
  }
  return [];
}
