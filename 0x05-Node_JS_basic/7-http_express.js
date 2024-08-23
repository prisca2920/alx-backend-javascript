const express = require('express');
const { promises: fs } = require('fs');

const app = express();
const port = 1245;

async function countStudents(fileName) {
  try {
    const data = await fs.readFile(fileName, 'utf8');
    const lines = data.trim().split('\n').slice(1);
    const students = {};
    let totalStudents = 0;

    lines.forEach((line) => {
      const [name, , , field] = line.split(',');
      if (name && field) {
        totalStudents += 1;
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(name);
      }
    });

    let output = `Number of students: ${totalStudents}\n`;
    for (const [field, names] of Object.entries(students)) {
      output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }

    return output.trim();
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const output = await countStudents(process.argv[2]);
    res.send(`This is the list of our students\n${output}`);
  } catch (err) {
    res.send('This is the list of our students\nCannot load the database');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
