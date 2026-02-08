const fs = require('fs').promises;

const path = require('path');

async function deleteFiles() {
    const fileToDelete = [
        './sdata/data2.csv',
        './sdata/datatxt.txt',
        './sdata/datajson.json'
    ];

    try {
        await Promise.all(
            fileToDelete.map(file =>
                fs.unlink(file).catch(err => {
                    if (err.code !== 'ENOENt') {
                        console.error(`Error deleting ${file}:`, err);

                    }
                })
            )
        );
        console.log('Files deleted sucessfully');
    } catch (err) {
        console.error('Error during file deletion:', err);

    }
}

deleteFiles();