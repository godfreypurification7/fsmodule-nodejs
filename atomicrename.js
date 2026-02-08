const fs = require('fs').promises;
const path = require('path');

async function updateFileAtomic(filePath, newContent) {
    const dir = path.dirname(filePath);
    const tempPath = path.join(
        dir,
        `.tmp-${Date.now()}-${Math.random().toString(36).slice(2)}`
    );

    try {
        await fs.writeFile(tempPath, newContent, 'utf8');

        const stats = await fs.stat(tempPath);
        if (stats.size === 0) {
            throw new Error('Temporary file is empty');
        }

        await fs.rename(tempPath, filePath); // ✅ atomic
        console.log('File updated atomically');
    } catch (err) {
        try { await fs.unlink(tempPath); } catch {}
        console.error('Atomic update failed', err);
        throw err;
    }
}

updateFileAtomic(
    path.resolve('./sdata/sdata/output.json'),
    JSON.stringify({ key: 'value' }, null, 2)
);
