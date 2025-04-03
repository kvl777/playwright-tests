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

async function checkInvalidCreds (testUsername: string, testPassword: string, errorMessage: string) {
    await loginPage.login({ username: testUsername, password: testPassword });
    await loginPage.expectErrorMessage(errorMessage);
}

test.describe('Invalid Username', () => {
    test('Login with empty Username (without fixtures)', { tag: '@002-0' }, async ({}) => {
        await checkInvalidCreds(process.env.INVALID_USERNAME_0, process.env.VALID_PASSWORD, errorText.usernameRequired);
    });
    test('Login with invalid Username one word (without fixtures)', { tag: '@002-1' }, async ({}) => {
        await checkInvalidCreds(process.env.INVALID_USERNAME_1, process.env.VALID_PASSWORD, errorText.invalidCredentials);
    });
    test('Login with invalid Username with space (without fixtures)', { tag: '@002-2' }, async ({}) => {
        await checkInvalidCreds(process.env.INVALID_USERNAME_2, process.env.VALID_PASSWORD, errorText.invalidCredentials);
    });
    test('Login with invalid Username with dash (without fixtures)', { tag: '@002-3' }, async ({}) => {
        await checkInvalidCreds(process.env.INVALID_USERNAME_3, process.env.VALID_PASSWORD, errorText.invalidCredentials);
    });
    test('Login with invalid Username with uppercase (without fixtures)', { tag: '@002-4' }, async ({}) => {
        await checkInvalidCreds(process.env.INVALID_USERNAME_4, process.env.VALID_PASSWORD, errorText.invalidCredentials);
    });
    test('Login with invalid Username with space before (without fixtures)', { tag: '@002-5' }, async ({}) => {
        await checkInvalidCreds(process.env.INVALID_USERNAME_5, process.env.VALID_PASSWORD, errorText.invalidCredentials);
    });
    test('Login with invalid Username with space after (without fixtures)', { tag: '@002-6' }, async ({}) => {
        await checkInvalidCreds(process.env.INVALID_USERNAME_6, process.env.VALID_PASSWORD, errorText.invalidCredentials);
    });
});

test.describe('Invalid Password', () => {
    test('Login with empty Password (without fixtures)', { tag: '@002-7' }, async ({}) => {
        await checkInvalidCreds(process.env.VALID_USERNAME, process.env.INVALID_PASSWORD_0, errorText.passwordRequired);
    });
    test('Login with invalid Password one word (without fixtures)', { tag: '@002-8' }, async ({}) => {
        await checkInvalidCreds(process.env.VALID_USERNAME, process.env.INVALID_PASSWORD_1, errorText.invalidCredentials);
    });
    test('Login with invalid Password with space (without fixtures)', { tag: '@002-9' }, async ({}) => {
        await checkInvalidCreds(process.env.VALID_USERNAME, process.env.INVALID_PASSWORD_2, errorText.invalidCredentials);
    });
    test('Login with invalid Password with dash (without fixtures)', { tag: '@002-10' }, async ({}) => {
        await checkInvalidCreds(process.env.VALID_USERNAME, process.env.INVALID_PASSWORD_3, errorText.invalidCredentials);
    });
    test('Login with invalid Password with uppercase (without fixtures)', { tag: '@002-11' }, async ({}) => {
        await checkInvalidCreds(process.env.VALID_USERNAME, process.env.INVALID_PASSWORD_4, errorText.invalidCredentials);
    });
    test('Login with invalid Password with space before (without fixtures)', { tag: '@002-12' }, async ({}) => {
        await checkInvalidCreds(process.env.VALID_USERNAME, process.env.INVALID_PASSWORD_5, errorText.invalidCredentials);
    });
    test('Login with invalid Password with space after (without fixtures)', { tag: '@002-13' }, async ({}) => {
        await checkInvalidCreds(process.env.VALID_USERNAME, process.env.INVALID_PASSWORD_6, errorText.invalidCredentials);
    });
});

test.describe('Valid login', () => {
    test('Login with valid credentials (without fixtures)', { tag: '@002-14' }, async ({}) => {
        await loginPage.login({ username: process.env.VALID_USERNAME, password: process.env.VALID_PASSWORD });
        await expect(inventoryPage.btnExtendSidebarMenu).toBeVisible();
    });
});