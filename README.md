# Automated Testscript for Signal app

This project used to perform automation testing of Signal app

# Testsuits
Project contains Regression, Sanity and UAT Test suits that covers the signal app

## Reporting
For reporting mochaowsome is used that created a detailed test report in html
report will be generated and placed in Cypress/reports/report.html

## Installation & Usage
Clone this repo and install all required packages using npm install in the root folder

```bash
  npm install
```

## Run test via command line
In the root execute below commands to run test
 ```bash
  npm run cy:run:chrome
  npm run cy:run:firefox
```

## Run test via GUI mode
In the root, run below command to execute tests via Cypress GUI mode
 ```bash
  npm run cy:open
  npm run cy:run:firefox
```