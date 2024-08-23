const http = require('http');
const { promises: fs } = require('fs');

const hostname = '127.0.0.1';
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

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const output = await countStudents(process.argv[2]);
      res.end(output);
    } catch (err) {
      res.statusCode = 404;
      res.end(err.message);
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;

