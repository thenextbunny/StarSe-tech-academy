import fs from 'fs';
import { promisify } from 'util';

const readFilePromise = promisify(fs.readFile);

let students;

readFilePromise('./students.json').then((data) => {
    students = JSON.parse(data);
    console.log('students:', students);
}).catch((error) => {
    console.log(error);
});