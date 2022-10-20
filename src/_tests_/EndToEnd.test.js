import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
  jest.setTimeout(30000);
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch({
      headless: false,
      // slow down by 250ms
      slowMo: 250,
      // ignores default setting that causes timeout errors
      ignoreDefaultArgs: ['--disable-extensions']
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .Details');
    expect(eventDetails).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.event .details');
    const eventDetails = await page.$('.event .Details');
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.event .details');
    const eventDetails = await page.$('.event .Details');
    expect(eventDetails).toBeNull();
  });
});

describe('Filter events by city', () => {
  jest.setTimeout(30000);
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch({
     headless: false,
      // slow down by 250ms
      slowMo: 250,
      // ignores default setting that causes timeout errors
      ignoreDefaultArgs: ['--disable-extensions']
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });
  test('When user hasn’t searched for a city, show upcoming events from all cities.', async () => {
    const numberEvents = await page.$$eval('.event', (element) => element.length);
      expect(numberEvents).toBe(2);
  });

  test('User should see a list of suggestions when they search for a city', async () => {
    await page.type('.city', 'Berlin');
    const numberCities = await page.$$eval('.suggestions li', (element) =>
      element.length);
    expect(numberCities).toBe(2);
  });

  test('User can select a city from the suggested list', async () => {
    await page.reload();
    await page.type('.city', 'Berlin');
    await page.click('.suggestions li');
    const numberEvents = await page.$$eval('.event', (element) =>
      element.length);
      expect(numberEvents).toBe(1);
  });
});
