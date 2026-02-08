const fs = require('fs').promises;
const path = require('path');

async function emptyDirectory(dirPath) {
    try {
        const files = await fs.readdir(dirPath, { withFileTypes: true });
        await Promise.all(
            files.map(file => {
                const fullPath = path.join(dirPath, file.name);
                return file.isDirectory()
                    ? fs.rm(fullPath, { recursive: true, force: true })
                    : fs.unlink(fullPath);

            })
        );

        console.log('Directory emptied successfully');

    } catch (err) {
        console.log('Error emptying directory', err);
    }
}

emptyDirectory('./sdata/sdata');