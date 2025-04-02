import { expect, test } from '@fixtures/fixtures';
import LoginPage from '@pages/login.page';
import InventoryPage from '@pages/inventory.page';
import errorText from 'constants/errors.constants.json';


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
    await loginPage.open();
});

test.describe('Invalid Username', () => {
    test('Login with empty Username (without fixtures)', { tag: '@002' }, async ({}) => {
        checkInvalidCreds(process.env.INVALID_USERNAME_0, process.env.VALID_PASSWORD, errorText.usernameRequired);
    });
    test('Login with invalid Username one word (without fixtures)', { tag: '@002' }, async ({}) => {
        checkInvalidCreds(process.env.INVALID_USERNAME_1, process.env.VALID_PASSWORD, errorText.invalidCredentials);
    });
    test('Login with invalid Username with space (without fixtures)', { tag: '@002' }, async ({}) => {
        checkInvalidCreds(process.env.INVALID_USERNAME_2, process.env.VALID_PASSWORD, errorText.invalidCredentials);
    });
    test('Login with invalid Username with dash (without fixtures)', { tag: '@002' }, async ({}) => {
        checkInvalidCreds(process.env.INVALID_USERNAME_3, process.env.VALID_PASSWORD, errorText.invalidCredentials);
    });
    test('Login with invalid Username with uppercase (without fixtures)', { tag: '@002' }, async ({}) => {
        checkInvalidCreds(process.env.INVALID_USERNAME_4, process.env.VALID_PASSWORD, errorText.invalidCredentials);
    });
});

test.describe('Valid login', () => {
    test('Login with valid credentials (without fixtures)', { tag: '@002' }, async ({}) => {
        await loginPage.login({ username: process.env.LOGIN_USERNAME, password: process.env.LOGIN_PASSWORD });
        await expect(inventoryPage.btnExtendSidebarMenu).toBeVisible();
    });
});

async function checkInvalidCreds (testUsername: string, testPassword: string, errorMessage: string) {
    await loginPage.login({ username: testUsername, password: testPassword });
    await loginPage.expectErrorMessage(errorMessage);
}