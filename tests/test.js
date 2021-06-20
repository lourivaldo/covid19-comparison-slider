const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const {parse, subDays, format, setHours} = require("date-fns");
const { parseFromTimeZone, formatToTimeZone } = require('date-fns-timezone');

function getInfo(htmlContent) {
    const $ = cheerio.load(htmlContent);

    const dates = [];

    $('.cvd-maps-list .card').each((idx, elem) => {

        const title = $(elem).find('.card-text').text();

        const dateStr = $(elem).find('.card-footer small').text().trim().replace(/Atualizado em /i, '');
        const date = parse(dateStr, 'dd/MM/yy', new Date());

        dates.push({
            title,
            date,
        });
    });

    return dates;
}

async function getPage() {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.irrd.org/geotemporal/");

    const content = await page.content();
    await browser.close();

    return content;
}

(async () => {
    const page = await getPage();
    const dates = await getInfo(page);

    const targetDate = formatToTimeZone(subDays(new Date(), 8), 'YYYY-MM-DD', {timeZone: 'America/Sao_Paulo'});

    for (let {date, title} of dates) {

        if (format(date, 'yyyy-MM-dd') >= targetDate) {
            console.log(`Updated ${date} ${title}`);
        } else {
            console.log(`Out of date ${date} ${title}`);
            // throw new Error(`Out of date ${date} ${title}`)
            process.exit(1)
        }
    }
})();
