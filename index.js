import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import { URL } from 'url';
import fs from 'fs';

const visitedLinks = new Set();
let scrapedContent = [];

async function scrapeStaticSite(url) {
    if (visitedLinks.has(url)) {
        // If the URL has already been visited, skip it to prevent circular scraping.
        return;
    }

    visitedLinks.add(url);

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
        }

        const data = await response.text();
        const $ = cheerio.load(data);

        // Extract content by class name
        $('.sqs-html-content').each((i, elem) => {
            scrapedContent.push($(elem).text());
        });

        console.log(`Scraping content from: ${url}`);
        scrapedContent.push(`Scraped content from: ${url}`);

        // console.log($.html());

        // Find and follow links to other pages within the same domain
        const links = [];
        $('a').each((i, elem) => {
            const href = $(elem).attr('href');
            if (href) {
                const absoluteUrl = new URL(href, url).href;

                // Filter links to keep only those within the same domain and path
                if (absoluteUrl.startsWith(url.origin) && !visitedLinks.has(absoluteUrl)) {
                    links.push(absoluteUrl);
                }
            }
        });

        // Recursively scrape each found link
        for (const link of links) {
            await scrapeStaticSite(link);
        }

    } catch (error) {
        console.error(`Error scraping the site at ${url}:`, error);
    }
}

// Start scraping from the base URL
(async () => {
    const [,, inputUrl, outputFilename] = process.argv;

    if (!inputUrl || !outputFilename) {
        console.error('Usage: node index.js <URL> <outputFilename>');
        process.exit(1);
    }

    const baseURL = new URL(inputUrl);
    await scrapeStaticSite(baseURL);

    // Save the scraped content to the specified file
    fs.writeFileSync(outputFilename, scrapedContent.join('\n'), 'utf8');
    console.log(`Scraped content saved to: ${outputFilename}`);

})();
