import { $ } from '@wdio/globals'
import Page from './page.js';

class Products extends Page {

    get backpack () {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get backRemove () {
        return $('#remove-sauce-labs-backpack');
    }

    get burgerMenu () {
        return $('#react-burger-menu-btn');
    }

    get logoutLink() {
        return $('#logout_sidebar_link');
    }

    get reset() {
        return $('#reset_sidebar_link')
    }

    async addToCart () {
        await this.backpack.click();
    }

    async logout() {
        await this.burgerMenu.click();
        await this.reset.click();
        await this.logoutLink.click();
    }
}
;

export default new Products();

//await logoutLink.waitForClickable();