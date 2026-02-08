const fs = require('fs').promises;

async function readFileExample() {
    try {
        const data = await fs.readFile('./sdata/myfile.txt', 'utf-8');
        console.log(data);

    } catch (err) {
        console.log(err)
    }
}

readFileExample();