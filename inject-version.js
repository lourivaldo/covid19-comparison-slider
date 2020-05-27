// const fs = require('fs');
// const _ = require('lodash');
// const path = require('path');
//
// const version = `${(new Date()).getTime()}`;
//
// const filePath = path.join(__dirname, 'build', 'index.html');
//
// let fileContent = fs.readFileSync(filePath).toString();
// fileContent = fileContent.replace(/%PUBLIC_URL%/g, process.env.PUBLIC_URL || '');
// fileContent = fileContent.replace(/%VERSION_HASH%/g, version);
//
// fs.writeFileSync(filePath, fileContent);
//
// // a
// const filePath1 = path.join(__dirname, 'build', 'worker.js');
//
// let fileContent1 = fs.readFileSync(filePath1).toString();
// fileContent1 = fileContent1.replace(/%PUBLIC_URL%/g, process.env.PUBLIC_URL || '');
// fileContent1 = fileContent1.replace(/%VERSION_HASH%/g, version);
//
// fs.writeFileSync(filePath1, fileContent1);
