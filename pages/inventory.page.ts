import { Locator, Page, test } from '@fixtures/fixtures';
import { inventory } from '@constants/endpoints.constants.json';
import BasePage from './base.page';

export default class InventoryPage extends BasePage {
    public btnExtendSidebarMenu: Locator;

    constructor(page: Page) {
        super(page);
        this.usePage = page;
        this.endpoint = inventory;
    }

    set usePage(page: Page) {
        super.usePage = page;

        this.btnExtendSidebarMenu = page.locator('#react-burger-menu-btn');
    }

    /** Open the Inventory page */
    async open(): Promise<void> {
        await super.open(this.endpoint);
    }
}
