export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((item) => item.location === city);
  }
  return [];
}
