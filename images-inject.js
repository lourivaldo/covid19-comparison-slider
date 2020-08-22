const fs = require('fs');
const _ = require('lodash');
const path = require('path');
const {parse, format, subDays, isBefore} = require('date-fns');
const {flow, map, sortBy, filter} = require('lodash/fp');

const inject = (config) => {

    const {folder, pattern, patternDate} = config;

    let files = [];

    try {
        files = fs.readdirSync(path.join(__dirname, 'public', 'img', folder));
    } catch (e) {
        return;
    }

    const mapFun = file => {

        if (!pattern.test(file)) return false;

        let date = parse(file.match(pattern)[1], patternDate, new Date());

        // if (folder === 'pernambuco' && isBefore(date, new Date(2020, 5, 12))) date = subDays(date, 1);

        return {
            date: format(date, 'dd/MM/yyyy'),
            img: `img/${folder}/${file}`,
        }
    };

    const imageFiles = flow(
        map(mapFun),
        filter(f => f),
        sortBy((f) => parse(f.date, 'dd/MM/yyyy', new Date())),
    )(files);

    const filePath = path.join(__dirname, 'src', 'AppConfigMaps.js');

    let fileContent = fs.readFileSync(filePath).toString();
    const content = JSON.stringify(_.uniqBy(imageFiles, 'date'),null,"\t")
                        .replace(/^\[/, '')
                        .replace(/\]$/, '');

    const replacer = new RegExp(`(\\/\\*\\* inject-images:start\\(${folder}\\) \\*\\/)([\\s\\S]*)(\\/\\*\\* inject-images:end\\(${folder}\\) \\*\\/)`, 'i');
    fileContent = fileContent.replace(replacer, `$1${content}$3`);

    fs.writeFileSync(filePath, fileContent);
};

const configs = [
    {folder: 'brasil',     pattern: /(\d{6})/i,      patternDate: 'yyMMdd'},
    {folder: 'nordeste',   pattern: /(\d{6})/i,      patternDate: 'yyMMdd'},

    {folder: 'pernambuco',             pattern: /(\d{6})/i, patternDate: 'yyMMdd'},
    {folder: 'pernambuco-obitos',      pattern: /(\d{6})/i, patternDate: 'yyMMdd'},
    {folder: 'pernambuco-recuperados', pattern: /(\d{6})/i, patternDate: 'yyMMdd'},
    {folder: 'pernambuco-ativos',      pattern: /(\d{6})/i, patternDate: 'yyMMdd'},

    {folder: 'rmr',             pattern: /(\d{2}\.\d{2})/i, patternDate: 'dd.MM'},
    {folder: 'rmr-recuperados', pattern: /(\d{2}\.\d{2})/i, patternDate: 'dd.MM'},
    {folder: 'rmr-ativos',      pattern: /(\d{2}\.\d{2})/i, patternDate: 'dd.MM'},
    {folder: 'rmr-obitos',      pattern: /(\d{2}\.\d{2})/i, patternDate: 'dd.MM'},

    {folder: 'recife',             pattern: /(\d{2}\.\d{2})/i, patternDate: 'dd.MM'},
    {folder: 'recife-recuperados', pattern: /(\d{2}\.\d{2})/i, patternDate: 'dd.MM'},
    {folder: 'recife-ativos',      pattern: /(\d{2}\.\d{2})/i, patternDate: 'dd.MM'},
];

configs.map(config => inject(config));
