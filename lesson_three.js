'use strict';

console.info(require('fs').readFileSync(process.argv[1], 'utf8').match(/[\r\n]/g).length);