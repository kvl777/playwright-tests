import { devices } from '@playwright/test';
import config from './playwright.config';

// This is an example of how you can extend a configuration file in Playwright
// So we changed the fullyParallel to false
config.fullyParallel = false;
// and updated projects
config.projects = [
    {
        name: 'chromium',
        use: { ...devices['Desktop Chrome'], viewport: { width: 1920, height: 1080 } },
    },
];

export default config;
