const { promisify } = require('util');

const readFileAsync = promisify(require('fs').readFile);

async function readWithPromisify() {
    try {
        const data = await readFileAsync('./sdata/myfile.txt', 'utf8');
        console.log('File content:', data);
    } catch (err) {
        console.error('Error reading file:', err);
    }

}

readWithPromisify()