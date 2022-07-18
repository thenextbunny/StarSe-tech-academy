import fs from 'fs';

let students;

fs.readFile('./students.json', (error, data) => {
    if (error) {
        console.error(error);
        return;
    }

    students = JSON.parse(data);
    console.log('students:', students)
});