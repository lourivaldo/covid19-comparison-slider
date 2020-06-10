const slugify = require('slugify');
const simpleGit = require('simple-git/promise');
const fs = require('fs');
const _ = require('lodash');
const path = require('path');
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

const getChangedFiles = async () => {

    const git = simpleGit();
    const status = await git.status();
    const files = [...status.not_added, ...status.modified];

    return files.map(file => path.join(__dirname, file));
};

const filterByFolder = async (files, folder) => {
    const sameFolderRegex = new RegExp(`^${folder}\/`);
    return files.filter((file) => file && sameFolderRegex.test(file))
};

function renameFileName(name) {
    return slugify(name, {lower: true})
        .replace(/_/g, '-')
        .replace(/[\(\)]/g, '-')
        .replace(/--/g, '-');
}

const renameFiles = async (folder) => {

    try {
        const files = fs.readdirSync(folder);

        for (const file of files) {

            const newFileName = renameFileName(file);

            const filePath = path.join(folder, file);
            const newFilePath = path.join(folder, newFileName);

            if (filePath !== newFilePath) {
                console.log('Renaming ', filePath, "\t --> ", newFilePath);
                fs.renameSync(filePath, newFilePath);
            }
        }
    } catch (e) {
        console.log(e.message)
    }

};

const optimizeImages = async (folder) => {

    const changedFiles = await getChangedFiles();
    const changedFilesOnFolder = await filterByFolder(changedFiles, folder);

    for (const image of changedFilesOnFolder) {

        console.log('Optimizing ' , image);
        return;

        try {
            await imagemin([image], {
                destination: `${folder}`,
                plugins: [
                    imageminJpegtran(),
                    imageminPngquant({
                        quality: [0.8, 0.9]
                    })
                ]
            });
        } catch (e) {
            console.log('Error: Try again...')
            try {
                await imagemin([image], {destination: `${folder}`});
            } catch (e) {
                console.log(e.message);
            }
        }
    }

};

const configs = [
    {path: path.join(__dirname, 'public', 'img', 'brasil'),},
    {path: path.join(__dirname, 'public', 'img', 'nordeste'),},
    {path: path.join(__dirname, 'public', 'img', 'pernambuco'),},
    {path: path.join(__dirname, 'public', 'img', 'rmr'),},
    {path: path.join(__dirname, 'public', 'img', 'rmr-recuperados'),},
    {path: path.join(__dirname, 'public', 'img', 'rmr-ativos'),},
    {path: path.join(__dirname, 'public', 'img', 'recife'),},
    {path: path.join(__dirname, 'public', 'img', 'recife-ativos'),},
    {path: path.join(__dirname, 'public', 'img', 'recife-recuperados'),},
];

(async () => {
    configs.map(async ({path: folder}) => {
        await renameFiles(folder);
        await optimizeImages(folder)
    });
})();

