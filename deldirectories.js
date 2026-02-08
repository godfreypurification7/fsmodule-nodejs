const fs = require('fs').promises;
const path = require('path');

async function deleteDirectory(dirPath) {
    try {
        const stats = await fs.stat(dirPath);
        if (!stats.isDirectory()) {
            console.log('Path is not a directory');
            return;
        }
        await fs.rm(dirPath, { recursive: true, force: true });
        console.log('Directory delete duccessfully');
    } catch (err) {
        if (err.code == 'ENOENT') {
            console.log('Director does not exists');
        } else {
            console.log('Error delete directory', err);
        }
    }

}

deleteDirectory('./sdata/sdata')