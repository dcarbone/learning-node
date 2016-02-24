'use strict';

if (process.argv.length !== 3) {
    console.error('You must specify a url.');
    return 1;
}

var client = require('https');

client.get(
    process.argv[2],
    function (response) {
        response.on('data', function (data) {
            console.info(data.toString());
        });
        response.on('error', function (e) {
            console.info('Error encountered: "' + e.message.toString() + '"');
        });
    }
)
    .on('error', function (e) {
        console.error('Error seen: "' + e.message.toString() + '"');
    });