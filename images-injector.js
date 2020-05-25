const fs = require('fs');
const path = require('path');
const {parse, format} = require('date-fns');

const files = fs.readdirSync(path.join(__dirname, 'public', 'img', 'nordeste'));
// const files = fs.readdirSync(path.join(__dirname, 'public', 'img', 'pernambuco'));

const imageFiles = files.map(file => {

    const pattern = /.*_(\d{6})\..*/i;

    if (!pattern.test(file)) return false;

    const date = parse(file.match(pattern)[1], 'yyMMdd', new Date());

    return {
        date: format(date, 'dd/MM/yyyy'),
        img: `img/nordeste/${file}`,
        // img: `img/pernambuco/${file}`,
    }
}).filter(e => e);

const filePath = path.join(__dirname, 'src', 'views', 'home', 'Home.jsx');
// const filePath = path.join(__dirname, 'src', 'views', 'home2', 'Home2.jsx');

let fileContent = fs.readFileSync(filePath).toString();
const content = JSON.stringify(imageFiles,null,1).replace(/^\[/, '').replace(/\]$/, '');

fileContent = fileContent.replace(/(\/\*\* map-images:start \*\/)([\s\S]*)(\/\*\* map-images:end \*\/)/i, `$1${content}$3`);
// fileContent = fileContent.replace(/(\/\*\* map-images-2:start \*\/)([\s\S]*)(\/\*\* map-images-2:end \*\/)/i, `$1${content}$3`);

fs.writeFileSync(filePath, fileContent);
