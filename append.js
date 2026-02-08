const path = require('path');
const fs = require('fs').promises;

async function appendFileExample() {
    try {
        const filePath = path.join(__dirname, 'sdata', 'datajson.json');

        const additionalJson = {
            name: 'Johan Purification',
            age: 17,
            city: 'Dhaka',
        };

        // Read existing data
        const fileData = await fs.readFile(filePath, 'utf8');
        const jsonArray = fileData ? JSON.parse(fileData) : [];

        // Add new object
        jsonArray.push(additionalJson);

        // Write back to file
        await fs.writeFile(
            filePath,
            JSON.stringify(jsonArray, null, 2),
            'utf8'
        );

        console.log(`Data appended successfully to ${filePath}`);
    } catch (err) {
        console.error('Error appending to file:', err);
    }
}

appendFileExample();
