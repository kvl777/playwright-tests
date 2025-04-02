import { expect, test } from '@fixtures/fixtures';

/*
Flow: Login
Test case: 004 - Login with valid credentials (soft expect)
Steps:
1. Open the Login page
2. Enter valid username 
3. Enter valid password
4. Click the Login button
5. Verify that the Extend sidebar menu button is hidden
6. Verify that the Extend sidebar menu button is visible
*/

test.describe('Login', () => {
    test('Login with valid credentials (soft expect)', { tag: '@004' }, async ({ loginPage, inventoryPage }) => {
        await loginPage.open();
        await loginPage.login({ username: process.env.LOGIN_USERNAME, password: process.env.LOGIN_PASSWORD });
        await expect.soft(inventoryPage.btnExtendSidebarMenu).toBeHidden();
        await expect(inventoryPage.btnExtendSidebarMenu).toBeVisible();
    });
});
