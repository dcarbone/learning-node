module.exports = function (dir, ext, cb) {
    "use strict";

    if (typeof cb !== 'function') {
        console.error('3rd argument MUST be valid function.');
        return 1;
    }

    var fs = require('fs'),
        files = [],
        i = 0,
        count = 0,
        regexp;

    if (dir.length === 0) {
        return cb('You must pass in a directory argument');
    }

    if (false === fs.lstatSync(dir).isDirectory()) {
        return cb('You must pass in a valid directory path');
    }

    if (ext.length === 0) {
        return cb('You must pass in an extension.');
    }

    if (ext.charAt(0) !== '.') {
        ext = '.' + ext;
    }

    regexp = new RegExp(ext + '$', 'i');

    fs.readdir(dir, function (err, data) {
        if (err) {
            return cb(err);
        }

        if (data) {
            for (i = 0, count = data.length; i < count; i++) {
                if (regexp.test(data[i])) {
                    files.push(data[i]);
                }
            }
        }

        return cb(null, files);
    });

};