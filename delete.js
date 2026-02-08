const { error } = require('console');

const fs = require('fs').promises;

async function deleteFile(params) {
    const filepath = './sdata/output.txt';

    try {
        await fs.access(filepath);
        await fs.unlink(filepath);
        console.log('File deleted successfully');
    } catch (err) {
        if (err.code == 'ENOENT') {
            console.log('File does not exists');
        } else {
            console.error('Error delete file', error);
        }
    }

}

deleteFile();