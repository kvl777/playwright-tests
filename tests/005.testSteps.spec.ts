import { expect, test } from '@fixtures/fixtures';

/*
Flow: Login
Test case: 005 - Login with valid credentials (test steps)
Steps:
1. Open the Login page
2. Enter valid username 
3. Enter valid password
4. Click the Login button
5. Verify that the Extend sidebar menu button is visible
*/

test.describe('Login', () => {
    test('Login with valid credentials (test steps)', { tag: '@005' }, async ({ loginPage, inventoryPage }) => {
        await test.step('1. Open the Login page', async () => {
            await loginPage.open();
        });
        await test.step('2. Enter valid username', async () => {
            await loginPage.inputUsername.fill(process.env.LOGIN_USERNAME);
        });
        await test.step('3. Enter valid password', async () => {
            await loginPage.inputPassword.fill(process.env.LOGIN_PASSWORD);
        });
        await test.step('4. Click the Login button', async () => {
            await loginPage.btnLogin.click();
        });
        await test.step('5. Verify that the Extend sidebar menu button is visible', async () => {
            await expect(inventoryPage.btnExtendSidebarMenu).toBeVisible();
        });
    });
});
