const fs = require('fs').promises;
const path = require('path');

async function moveFile() {
    const sourceFile = './sdata/Godfrey.jpg';
    const targetDir = './sdata/sdata';
    const targetFile = path.join(targetDir, 'Godfrey.jpg');
    try {
        await fs.access(sourceFile);
        await fs.mkdir(targetDir, { recursive: true });
        await fs.rename(sourceFile, targetFile);
        console.log('File moves successfully');
    } catch (err) {
        if (err.code == 'ENOENT') {
            console.log('SOurce file does not exists');
        } else if (err.code == 'EXDEV') {
            console.log('Cross-device move detected, using copy+delete fallback');
            await moveAcrossDevices(sourceFile, targetDir);
        } else {
            console.log('Error moving file', err);
        }
    }

}

async function moveAcrossDevices(source, target) {
    try {
        await fs.copyFile(source, target);
        await fs.unlink(source);
        console.log('File moved across devised successfully');
    } catch (err) {
        try { await fs.unlink(target); } catch (e) { }
        throw err;
    }

}

moveFile();