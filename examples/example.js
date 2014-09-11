var fs = require('fs');
var code = fs.readFileSync('./file.js', 'utf-8');
var pretty = require('../');

var result = pretty(code);
fs.writeFileSync('file.result.js', result);