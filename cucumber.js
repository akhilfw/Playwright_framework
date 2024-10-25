// module.exports = {
//   default: [
//     '--require-module ts-node/register', // Load TypeScript module
//     '--require tests/step_definitions/**/*.ts', // Load all step definitions
//     'tests/features/**/*.feature' // Specify the feature files location
//   ].join(' ')
// };

// cucumber.js
module.exports = {
  default: '--require-module ts-node/register --require tests/step_definitions/**/*.ts --require tests/support/utils/world.ts --format json:tests/reports/cucumber_report.json tests/features/**/*.feature'
};