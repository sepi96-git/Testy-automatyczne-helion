class GlobalPage {
    async OpenPage(pageUrl:string) {
        await browser.url(pageUrl);
        expect(browser).toHaveUrl(pageUrl);
    }
}


export default new GlobalPage();