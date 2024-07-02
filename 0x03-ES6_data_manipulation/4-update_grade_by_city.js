export default function updateStudentGradeByCity(list, city, newGrades) {
  return list
    .filter((element) => element.location === city)
    .map((person) => {
      const grades = newGrades.filter((element) => element.studentId === person.id);
      const grade = grades.length ? grades[0].grade : 'N/A';
      return {
        ...person,
        grade,
      };
    });
}
