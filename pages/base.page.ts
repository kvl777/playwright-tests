import { Page, test } from '@fixtures/fixtures';

export default class BasePage {
    public page: Page;
    public endpoint = '';

    constructor(page: Page) {
        this.usePage = page;
    }

    set usePage(page: Page) {
        this.page = page;
    }

    /**
     * Open page
     * @param path - page endpoint
     */
    async open(path = ''): Promise<void> {
        await this.page.goto('/' + path);
    }
}
