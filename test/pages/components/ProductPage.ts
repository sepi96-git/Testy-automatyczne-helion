import CartPage from "./CartPage";

class ProductPage {
    get ProductTitle() {
        return $("div.title-group > h1 > span[itemprop='name']");
    }

    get addToCartBtn() {
        return $("a#addToBasket_tefust");
    }

    get ProductPrice() {
        return $("#cena_d");
    }

    async getProductPrice():Promise<string> {
        const price:WebdriverIO.Element = await this.ProductPrice;
        await price.waitForDisplayed();
        return await price.getText();
    }

    async getProductTitleValue():Promise<string> {
        const title:WebdriverIO.Element = await this.ProductTitle;
        await title.waitForDisplayed();
        return await title.getText();
    }

    async clickOnAddToCartBtn() {
        const btn:WebdriverIO.Element = await this.addToCartBtn;
        await btn.click();
    }

    async ProductTitleIsVisible() {
        const title:WebdriverIO.Element = await this.ProductTitle;
        await title.waitForDisplayed();
    }

    async addToCartBtnIsVisible() {
        const btn:WebdriverIO.Element = await this.addToCartBtn;
        await btn.waitForDisplayed();
    }
}

export default new ProductPage();