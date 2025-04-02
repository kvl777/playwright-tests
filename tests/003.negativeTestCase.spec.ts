import { expect, test } from '@fixtures/fixtures';
import { errorInvalidCredentials } from '@constants/errors.constants.json';

/*
Flow: Login
Test case: 003 - Login with invalid password (negative test case)
Steps:
1. Open the Login page
2. Enter valid username 
3. Enter invalid password. Ex: invalid_password
4. Click the Login button
5. Verify that the Login page is open
6. Verify that the error is visible and has text "errorInvalidCredentials"
*/

test.describe('Login', () => {
    test('Login with invalid password (negative test case)', { tag: '@003' }, async ({ loginPage }) => {
        await loginPage.open();
        await loginPage.login({ username: process.env.LOGIN_USERNAME, password: 'invalid_password' });
        await expect(loginPage.page).toHaveURL(loginPage.endpoint);
        await expect(loginPage.inputUsername).toBeVisible();
        await expect(loginPage.labelError).toHaveText(errorInvalidCredentials);
    });
});
