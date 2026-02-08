const fs = require('fs').promises;

async function writeFileExample() {
    try {
        // TXT
        await fs.writeFile(
            './sdata/datatxt.txt',
            'Hello!, I am Godfrey Purification',
            'utf8'
        );

        // JSON
        const data = { name: 'John', age: 30, city: 'New York' };
        await fs.writeFile(
            './sdata/datajson.json',
            JSON.stringify(data, null, 2),
            'utf8'
        );

        // CSV
        const data2 = { name: 'Johan', age: 17, city: 'Dhaka' };
        const csv = `name,age,city\n${data2.name},${data2.age},${data2.city}`;

        await fs.writeFile(
            './sdata/data2.csv',
            csv,
            'utf8'
        );

        console.log('Files have been written successfully.');
    } catch (err) {
        console.error('Error writing files:', err);
    }
}

writeFileExample();
