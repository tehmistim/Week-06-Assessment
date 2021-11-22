
import { Builder, Capabilities, By } from "selenium-webdriver";
import { isAwaitExpression } from "typescript";

require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
    driver.get('http://localhost:3000/')
});

afterAll(async () => {
    driver.quit()
});

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)
});

test('Draw shows at page load', async () => {
    const draw = await driver.findElement(By.id('draw'))
    const displayed = await draw.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)

});

test('All bots are listed', async () => {
    const seeAll = await driver.findElement(By.id('see-all'))
    const displayed = await seeAll.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)

});