'use strict';

require('fs').readFile(process.argv[1], 'utf8', function (err, data) {
    console.info(data.match(/[\r\n]/g).length);
});