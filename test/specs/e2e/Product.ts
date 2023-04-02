import { helionHomeUrl, searchProductUrl, cartUrl } from "../../config/pagesUrl"
import searchbarPage from "../../pages/components/searchbarPage";
import { searchPhrase, alertMessage,deletedProductMessage } from "../../config/data";
import searchResultPage from "../../pages/searchResultPage";
import ProductPage from "../../pages/components/ProductPage";
import CartPage from "../../pages/components/CartPage";


describe("E2E - Products", async () => {
    let productTitle: string = "";
    let price:string = "";
    
    before(() => {
        browser.url(helionHomeUrl);
    })

    it("Should type search phrase and click search icon", async () => {
        await searchbarPage.typeSearchPhrase(searchPhrase);
        await searchbarPage.clickOnsearchIcon();
        expect(browser).toHaveUrl(searchProductUrl);
    })

    it("Should click on first book", async () => {
        await searchResultPage.clickOnfirstBookItem();
        await ProductPage.ProductTitleIsVisible();
        await ProductPage.addToCartBtnIsVisible();
        productTitle = await ProductPage.getProductTitleValue();
        price = await ProductPage.getProductPrice();
    })

    it("Should click on add to cart button", async () => {
        await ProductPage.clickOnAddToCartBtn();
        expect(browser).toHaveUrlContaining(cartUrl);
        expect(await CartPage.getsuccessAlertValue()).toContain(productTitle);
        expect(await CartPage.getTotalPriceValue()).toContain(price);
    })

    it("Should delete product from cart", async () => {
        await CartPage.clickOnCheckbox();
        await CartPage.clickOnDeleteSelectedLabel();
        expect(await browser.getAlertText()).toContain(alertMessage);
        await CartPage.acceptDeleteAlert();
    })
})