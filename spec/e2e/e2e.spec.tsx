it('e2e добавление задачи', async () => {
  await page.goto('http://localhost:3001/');

  await page.waitForSelector('.input-field-element');
  await page.type('.input-field-element', 'купить хлеб');

  await page.click(".button-with-icon");

  const html = await page.$eval(".item-wrapper > label", (el) => el.innerHTML);

  expect(html).toBe('купить хлеб');
});