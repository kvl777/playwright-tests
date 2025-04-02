import { expect, test } from '@fixtures/fixtures';
import LoginPage from '@pages/login.page';
import InventoryPage from '@pages/inventory.page';

/*
Flow: Login
Test case: 002 - Login with valid credentials (without fixtures)
Steps:
1. Open the Login page
2. Enter valid username 
3. Enter valid password
4. Click the Login button
5. Verify that the Extend sidebar menu button is visible
*/

let loginPage: LoginPage;
let inventoryPage: InventoryPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
});

test.describe('Login', () => {
    test('Login with valid credentials (without fixtures)', { tag: '@002' }, async ({}) => {
        await loginPage.open();
        await loginPage.login({ username: process.env.LOGIN_USERNAME, password: process.env.LOGIN_PASSWORD });
        await expect(inventoryPage.btnExtendSidebarMenu).toBeVisible();
    });
});
