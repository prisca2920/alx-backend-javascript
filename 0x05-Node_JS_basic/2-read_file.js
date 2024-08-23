const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').trim();
    const lines = data.split('\n').slice(1);

    const students = lines.reduce((acc, line) => {
      const [name, , , field] = line.split(',');
      if (name && field) {
        if (!acc[field]) acc[field] = [];
        acc[field].push(name);
      }
      return acc;
    }, {});

    const totalStudents = lines.length;
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, names] of Object.entries(students)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
