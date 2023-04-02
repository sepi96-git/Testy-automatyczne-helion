import GlobalPage from "../../pages/GlobalPage"
import { helionHomeUrl, notFoundUrl } from "../../config/pagesUrl";
import searchbarPage from "../../pages/components/searchbarPage";
import { incorrectSearchPhrase, notFoundMessage, searchPhrase } from "../../config/data";
import { searchPageUrl } from "../../config/pagesUrl";
import searchResultPage from "../../pages/searchResultPage";
import { searchResultTitle } from "../../config/data";

describe("E2E - Searchbar", async () => {

    it("Should open helion home page and verify visible searchbar", async () => {
        await GlobalPage.OpenPage(helionHomeUrl);
        await searchbarPage.searchbarIsVisible();
    })

    it("Should click on search icon, and verify url", async () => {
        await searchbarPage.clickOnsearchIcon();
        expect(browser).toHaveUrl(helionHomeUrl);
    })

    it("Should type search value and verify visible popup", async () => {
        await searchbarPage.typeSearchPhrase(searchPhrase);
        await searchbarPage.suggestPopupIsVisible();
    })

    // it("Should click on see all books button", async () => {
    //     await searchbarPage.clickOnseeAllBooksBtn();
    //     expect(browser).toHaveUrl(searchPageUrl);
    // })

    // it("Should verify visible correctly title and number of books", async () => {
    //     const title:string = await searchResultPage.getPageTitle();
    //     const numberOfBooks:number = await searchResultPage.getNumberOfBooks();
    //     expect(title).toContain(searchResultTitle);
    //     expect(numberOfBooks).toEqual(20);
    // })

    it("Should clear input value", async () => {
        await searchbarPage.clearSearchBar();
        expect(await searchbarPage.getInputValue()).toContain("");
    })

    it("Should type incorrect book name and verify alert", async () => {
        await searchbarPage.typeSearchPhrase(incorrectSearchPhrase);
        await searchbarPage.clickOnsearchIcon();
        expect(await searchbarPage.getNotFoundAlertText()).toContain(notFoundMessage);
    })

    it("Should clear input value and click on search icon", async () => {
        await searchbarPage.clearSearchBar();
        await searchbarPage.clickOnsearchIcon();
        expect(browser).toHaveUrl(notFoundUrl);
        expect(await searchbarPage.getInputValue()).toContain(incorrectSearchPhrase);
    })
})