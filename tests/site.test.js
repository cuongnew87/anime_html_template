const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Replace with your local or deployed URL during testing
  await page.goto(process.env.BASE_URL || 'http://localhost:8080'); // We'll serve locally in CI
  await expect(page).toHaveTitle(/Anime | Template/); // Adjust to match your <title>
  await expect(page.locator('h2')).toHaveText('Fate / Stay Night: Unlimited Blade Works'); // Adjust to your content

  await browser.close();
})();