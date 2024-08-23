const fs = require('fs').promises;

async function countStudents(path) {
  try {
    await fs.access(path);
    const data = await fs.readFile(path, 'utf8');

    const lines = data.trim().split('\n').slice(1);
    const students = {};

    lines.forEach((line) => {
      const [name, , , field] = line.split(',');
      if (name && field) {
        if (!students[field]) students[field] = [];
        students[field].push(name);
      }
    });

    const totalStudents = lines.length;
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, names] of Object.entries(students)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }

    return { totalStudents, students };
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
