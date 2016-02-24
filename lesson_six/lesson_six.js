'use strict';

if (process.argv.length < 4) {
    console.error('You must pass in a valid directory path and a file extension.');
    return 1;
}

var dir = process.argv[2].toString().trim(),
    ext = process.argv[3].toString().trim();

var worker = require('./worker.js'),
    i = 0,
    count = 0;

worker(dir, ext, function(err, data) {
    if (err) {
        console.info('Error encountered: ' + err.toString());
    } else if (data) {
        if (data.length > 0) {
            console.info("\n" + data.length + ' files with extension "' + ext + '" found: ' + "\n");
            for (i = 0, count = data.length; i < count; i++) {
                console.info(i + 1 + '. ' + data[i]);
            }
        } else {
            console.info('No files found with extension "' + ext + '" found.');
        }
    }
});