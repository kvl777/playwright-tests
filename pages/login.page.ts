import { Locator, Page, expect, test } from '@fixtures/fixtures';
import { login } from '@constants/endpoints.constants.json';
import BasePage from './base.page';

export default class LoginPage extends BasePage {
    public inputUsername: Locator;
    public inputPassword: Locator;
    public btnLogin: Locator;
    public labelError: Locator;

    constructor(page: Page) {
        super(page);
        this.usePage = page;
        this.endpoint = login;
    }

    set usePage(page: Page) {
        super.usePage = page;

        this.inputUsername = page.locator('#user-name');
        this.inputPassword = page.locator('#password');
        this.btnLogin = page.locator('#login-button');
        this.labelError = page.locator('[data-test="error"]');
    }

    /** Open the Login page */
    async open(): Promise<void> {
        await super.open(this.endpoint);
    }

    async login(creds?: { username?: string; password?: string }) {
        const { username, password } = creds ?? {};

        if (username !== undefined) await this.inputUsername.fill(username);
        if (password !== undefined) await this.inputPassword.fill(password);
        await this.btnLogin.click();
    }

    async expectErrorMessage(errorText): Promise<void> {
        await expect(this.labelError).toHaveText(errorText);
    }
}
