const os = require('os');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const slugify = require('slugify');
const {format, subDays, isAfter, subHours} = require('date-fns');
const { ptBR } = require('date-fns/locale');
const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

// If modifying these scopes, delete token.json.
const SCOPES = [
    'https://www.googleapis.com/auth/drive',
    'https://www.googleapis.com/auth/drive.file',
    'https://www.googleapis.com/auth/drive.readonly',
    'https://www.googleapis.com/auth/drive.metadata.readonly',
    'https://www.googleapis.com/auth/drive.metadata',
    'https://www.googleapis.com/auth/drive.photos.readonly'
];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'google-token.json';

// Load client secrets from a local file.
fs.readFile('google-credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    // Authorize a client with credentials, then call the Google Drive API.
    authorize(JSON.parse(content), listFiles);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
    const {client_secret, client_id, redirect_uris} = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
        client_id, client_secret, redirect_uris[0]);

    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, (err, token) => {
        if (err) return getAccessToken(oAuth2Client, callback);
        oAuth2Client.setCredentials(JSON.parse(token));
        callback(oAuth2Client);
    });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getAccessToken(oAuth2Client, callback) {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question('Enter the code from that page here: ', (code) => {
        rl.close();
        oAuth2Client.getToken(code, (err, token) => {
            if (err) return console.error('Error retrieving access token', err);
            oAuth2Client.setCredentials(token);
            // Store the token to disk for later program executions
            fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
                if (err) return console.error(err);
                console.log('Token stored to', TOKEN_PATH);
            });
            callback(oAuth2Client);
        });
    });
}

async function listMyFilesAndFolders(auth, folderId) {
    return new Promise((resolve) => {

        const drive = google.drive({version: 'v3', auth});

        drive.files.list({
            pageSize: 1000,
            q: `'${folderId}' in parents and trashed = false`,
            fields: 'nextPageToken, files(id, name, modifiedTime, parents)',
        }, (err, res) => {

            const newFiles = [];

            if (err) return console.log('The API returned an error: ' + err, folderId);
            const files = res.data.files;

            if (files.length) {

                files.map((file) => {
                    // console.log(`${file.name} (${file.id}) (${file.modifiedTime})`);
                    newFiles.push({
                        id: file.id,
                        name: file.name,
                        modifiedTime: file.modifiedTime,
                    });
                });
            } else {
                console.log('No files found.');
            }

            resolve(newFiles);
        });
    });
}

function filterNew(files) {
    const date = subHours(new Date(), 28);
    return files.filter(f => isAfter(new Date(f.modifiedTime), date));
}

/**
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
async function listFiles(auth) {

    const folderId = '1NHLuHIiAleLc7oLlOnS6YWfOKD87ToLa'; // Main
    const folders = await listMyFilesAndFolders(auth, folderId);

    for (const folder of folders) {

        let folderId = folder.id;
        const folderName = slugify(folder.name.toLowerCase());

        if (folderName === 'rmr') {
            const beforeMonthFolder = format(subDays(new Date(), 3), 'MM');
            const rmrFolders = await listMyFilesAndFolders(auth, folderId);
            const found = rmrFolders.find(rmrFolder => rmrFolder.name === beforeMonthFolder);
            if (found) folderId = found.id;
        }

        if (folderName === 'recife') {
            const beforeMonthFolder = format(subDays(new Date(), 2), 'MMMM', {locale: ptBR});
            const rmrFolders = await listMyFilesAndFolders(auth, folderId);
            const found = rmrFolders.find(rmrFolder => rmrFolder.name === beforeMonthFolder);
            if (found) folderId = found.id;
            else {
                const beforeMonthFolder = format(subDays(new Date(), 3), 'MMMM', {locale: ptBR});
                const rmrFolders = await listMyFilesAndFolders(auth, folderId);
                const found = rmrFolders.find(rmrFolder => rmrFolder.name === beforeMonthFolder);
                if (found) folderId = found.id;
            }
        }

        const files = filterNew(await listMyFilesAndFolders(auth, folderId));

        for (const file of files) {

            const downloadedFile = await getFile(auth, file.id);
            const destinationFile = path.join(__dirname, 'public', 'img', folderName, file.name);

            fs.copyFileSync(downloadedFile, destinationFile);
            console.log(`Download ${destinationFile}`);
        }
    }
}

async function getFile(auth, fileId) {
    return new Promise(async (resolve) => {

        const drive = google.drive({version: 'v3', auth});

        // For converting document formats, and for downloading template
        // documents, see the method drive.files.export():
        // https://developers.google.com/drive/api/v3/manage-downloads
        const res = await drive.files.get({fileId, alt: 'media'}, {responseType: 'stream'}) ;

        const filePath = path.join(os.tmpdir(), uuidv4());
        // console.log(`writing to ${filePath}`);

        const dest = fs.createWriteStream(filePath);
        let progress = 0;

        res.data
            .on('end', () => {
                // console.log('Done downloading file.');
                resolve(filePath);
            })
            .on('error', err => {
                console.error('Error downloading file.');
                reject(err);
            })
            .on('data', d => {
                progress += d.length;
                if (process.stdout.isTTY) {
                    // process.stdout.clearLine();
                    // process.stdout.cursorTo(0);
                    // process.stdout.write(`Downloaded ${progress} bytes`);
                }
            })
            .pipe(dest);
    })
}

