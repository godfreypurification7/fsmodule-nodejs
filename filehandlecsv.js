const fs = require('fs').promises;
const path = require('path');

async function fileHandleWritecsv() {
    let fileHandle;
    try {
        await fs.mkdir('sdata', { recursive: true });

        fileHandle = await fs.open(path.join('sdata', 'output.csv'), 'w');
        await fileHandle.write('id,name,age\n');

        // CSV rows
        await fileHandle.write('1,Alice,25\n');
        await fileHandle.write('2,Bob,30\n');
        await fileHandle.write('3,Charlie,28\n');
        console.log('Content written successfully');

    } catch (err) {
        console.error('Error writing to file:', err);
    } finally {
        if (fileHandle) {
            await fileHandle.close();
        }
    }
}

fileHandleWritecsv();