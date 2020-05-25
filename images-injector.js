const fs = require('fs');
const path = require('path');
const {parse, format} = require('date-fns');

const inject = (config) => {

    const {folder, pattern, patternDate} = config;

    const files = fs.readdirSync(path.join(__dirname, 'public', 'img', folder));

    const imageFiles = files.map(file => {

        if (!pattern.test(file)) return false;

        const date = parse(file.match(pattern)[1], patternDate, new Date());

        return {
            date: format(date, 'dd/MM/yyyy'),
            img: `img/${folder}/${file}`,
        }
    }).filter(e => e);

    const filePath = path.join(__dirname, 'src', 'App.js');

    let fileContent = fs.readFileSync(filePath).toString();
    const content = JSON.stringify(imageFiles,null,"\t")
                        .replace(/^\[/, '')
                        .replace(/\]$/, '');

    const replacer = new RegExp(`(\\/\\*\\* inject-images:start\\(${folder}\\) \\*\\/)([\\s\\S]*)(\\/\\*\\* inject-images:end\\(${folder}\\) \\*\\/)`, 'i');
    fileContent = fileContent.replace(replacer, `$1${content}$3`);

    fs.writeFileSync(filePath, fileContent);
};

const configs = [
    {folder: 'nordeste',   pattern: /(\d{6})/i,      patternDate: 'yyMMdd'},
    {folder: 'pernambuco', pattern: /(\d{6})/i,      patternDate: 'yyMMdd'},
    {folder: 'rmr',        pattern: /(\d{2}\.\d{2})/i, patternDate: 'dd.MM'},
    {folder: 'recife',     pattern: /(\d{2}\.\d{2})/i, patternDate: 'dd.MM'},
];

configs.map(config => inject(config));
