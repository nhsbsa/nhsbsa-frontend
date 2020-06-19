// Get the --testhost=... argument from the backstop command
const arguments = require('minimist')(process.argv.slice(2));
const TEST_HOST = arguments.testhost || "http://host.docker.internal:3000"

module.exports = {
  "id": "nhsbsa-frontend",
  "viewports": [
    {
      "label": "iPhone 5/SE",
      "width": 320,
      "height": 568
    },
    {
      "label": "iPhone 6-8",
      "width": 375,
      "height": 667
    },
    {
      "label": "iPad",
      "width": 768,
      "height": 1024
    },
    {
      "label": "Surface, iPad Pro",
      "width": 1366,
      "height": 768
    }
  ],
  "onBeforeScript": "puppet/onBefore.js",
  "onReadyScript": "puppet/onReady.js",
  "scenarios": [
  ],
  "paths": {
    "bitmaps_reference": "tests/backstop/bitmaps_reference",
    "bitmaps_test": "tests/backstop/bitmaps_test",
    "engine_scripts": "tests/backstop/engine_scripts",
    "html_report": "tests/backstop/html_report",
    "ci_report": "tests/backstop/ci_report"
  },
  "report": ["browser"],
  "engine": "puppeteer",
  "engineOptions": {
    "args": ["--no-sandbox"]
  },
  "asyncCaptureLimit": 5,
  "asyncCompareLimit": 50,
  "debug": false,
  "debugWindow": false
}
