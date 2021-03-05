process.stdout.write('prompt > ');

// const pwd = require('./pwd');
// process.stdin.on('data', pwd);

const ls = require('./ls');
process.stdin.on('data', ls);
