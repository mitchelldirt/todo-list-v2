
import { readFileSync } from 'fs';

function readFile(filePath) {
  try {
    const data = readFileSync(filePath);
    return data.toString();
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

const input = JSON.parse(readFile('./client/src/services/mockUser.json')).tasks;
console.log(input)
export default input;