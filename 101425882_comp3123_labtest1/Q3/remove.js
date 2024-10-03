const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

const removeLogs = () => {
    if (fs.existsSync(logsDir)) {
        fs.readdir(logsDir, (err, files) => {
            if (err) {
                console.error('Error reading the directory:', err);
                return;
            }

            if (files.length > 0) {
                console.log('Files to delete:');
                files.forEach(file => console.log(file));
                
                files.forEach(file => {
                    const filePath = path.join(logsDir, file);
                    fs.unlink(filePath, (err) => {
                        if (err) {
                            console.error(`Error deleting file ${file}:`, err);
                        }
                    });
                });
            } else {
                console.log('No files to delete.');
            }

            fs.rmdir(logsDir, (err) => {
                if (err) {
                    console.error('Error removing the directory:', err);
                } else {
                    console.log('Logs directory removed successfully.');
                }
            });
        });
    } else {
        console.log('Logs directory does not exist.');
    }
};

removeLogs();
