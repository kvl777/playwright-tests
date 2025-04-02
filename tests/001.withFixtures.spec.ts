import { expect, test } from '@fixtures/fixtures';

/*
Flow: Login
Test case: 001 - Login with valid credentials (fixtures)
Steps:
1. Open the Login page
2. Enter valid username 
3. Enter valid password
4. Click the Login button
5. Verify that the Extend sidebar menu button is visible
*/

test.describe('Login', () => {
    // test.beforeAll(async () => {});
    // test.beforeEach(async () => {});
    // test.afterEach(async ({}) => {});
    // test.afterAll(async ({}) => {});

    test('Login with invalid credentials (fixtures)', { tag: '@001' }, async ({ loginPage, inventoryPage }) => {
        await loginPage.open();
        await loginPage.login({ username: process.env.INVALID_USERNAME_1, password: process.env.LOGIN_PASSWORD });
        await expect(loginPage.labelError).toHaveText(errorMessage);
    });

    test('Login with valid credentials (fixtures)', { tag: '@001' }, async ({ loginPage, inventoryPage }) => {
        await loginPage.open();
        await loginPage.login({ username: process.env.LOGIN_USERNAME, password: process.env.LOGIN_PASSWORD });
        await expect(inventoryPage.btnExtendSidebarMenu).toBeVisible();
    });
});
