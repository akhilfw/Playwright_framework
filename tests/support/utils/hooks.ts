import { Before, After } from '@cucumber/cucumber';

Before(async function () {
  // Initialize browser and page before each scenario
  await this.init();
});

After(async function () {
  // Close the browser after each scenario
  await this.close();
});

