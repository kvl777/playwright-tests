# Playwright Template

This repository contains the Playwright framework template. You can use it as the basis of your project.

## Tech stack

-   [NodeJS](https://nodejs.org/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Playwright](https://playwright.dev/);

## Install

Before working with this framework, complete the following steps:

-   Clone this repo:

```bash
git clone https://github.com/AndreyCar/playwright_template.git
```

-   Install dependencies:

```bash
npm i
```

-   Install playwright browsers:

```bash
npm playwright install
```

-   Copy the `.env.example` file and rename it to `.env`. Please note that in a real project, the `.env.example` file will not have filled values, you will have to fill them in yourself.

## Steps to run

To run all tests use the following commands:

-   In headless mode (without showing the browser):

```bash
npm run tests
```

-   In headed mode (with showing the browser):

```bash
npm run tests
```

## Reports

### Locally

When the tests are completed, an HTML report is generated. To open it, run the following command:

```bash
npm run report:html:show
```

### CI

When running the `test.yml` workflow, the HTML report is deployed to the `reports` branch. The GitHub Pages feature is enabled in this branch, and you can view the deployed report by following this [link](https://andreycar.github.io/playwright_template/).

## GitHub Actions

In this template, we use GitHub Actions to run all the tests and then deploy the report in the `reports` branch.
