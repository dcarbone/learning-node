'use strict';

if (process.argv.length < 4) {
    console.error('You must pass in a valid directory path and a file extension.');
    return 1;
}

var fs = require('fs');

var dir = process.argv[2].toString().trim();

if (dir.length === 0) {
    console.error('You must pass in a directory argument');
    return 1;
}

if (false === fs.lstatSync(dir).isDirectory()) {
    console.error('You must pass in a valid directory path');
    return 1;
}

var ext = process.argv[3].toString().trim();

if (ext.length === 0) {
    console.error('You must pass in an extension.');
    return 1;
}

if (ext.charAt(0) !== '.') {
    ext = '.' + ext;
}

var regexp = new RegExp('\\' + ext + '$', 'i');
var files = [];
var i = 0;
var count = 0;

fs.readdir(dir, function (err, data) {
    if (err) {
        console.info('Error encountered: ' + err.toString());
    } else if (data) {
        for (i = 0, count = data.length; i < count; i++) {
            if (regexp.test(data[i])) {
                files.push(data[i]);
            }
        }
        if (files.length > 0) {
            console.info("\n" + files.length + ' files with extension "' + ext + '" found: ' + "\n");
            for (i = 0, count = files.length; i < count; i++) {
                console.info(i + 1 + '. ' + files[i]);
            }
        } else {
            console.info('No files found with extension "' + ext + '" found.');
        }
    }
});