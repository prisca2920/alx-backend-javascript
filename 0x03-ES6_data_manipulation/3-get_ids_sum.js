export default function getStudentIdsSum(list) {
  return list.reduce((total, element) => total + element.id, 0);
}
