import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    const list = getListStudentIds(students);
    const initialValue = 0;
    const sumWithInitial = list.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue,
    );
    return sumWithInitial;
  }
  return [];
}
