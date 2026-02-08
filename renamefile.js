const fs = require('fs').promises;

async function renameFile() {
    const oldPath = './sdata/output.csv';
    const newPath = './sdata/sdata/output.csv';
    try {
        await fs.access(oldPath);
        try {
            await fs.access(newPath);
            console.log('Destination fil already exists');
            return;
        } catch (err) {

        }
        await fs.rename(oldPath, newPath);
        console.log('FIle remaned sucessfully');

    } catch (err) {
        if (err.code == 'ENOENT') {
            console.log('Source files does not exists');
        } else {
            console.error('Error renaming file', err);
        }
    }

}
renameFile();