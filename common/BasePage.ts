import { expect, Page } from "@playwright/test";
import { ApplicationUrl } from "./ApplicationUrl";



export class BasePage {

    constructor(public page: Page) {
        this.page = page;
    }

    public async goToUrl(url: ApplicationUrl) {
        await this.page.goto(url.valueOf());
    }

    public async fillText(el: string, text: string) {
        await this.page.locator(el).click();
        await this.page.locator(el).fill(text);
    }

    public async clickElement(el: string) {
        await this.page.waitForSelector(el);
        await this.page.locator(el).click();
    }

    public async hover(locator: string) {
        const element = await this.page.locator(locator);
        element.hover;
    }

    public async alertAccept() {
        await this.page.on('dialog', dialog => {
            dialog.accept();
        });
    }

    public async alertDismiss() {
        await this.page.on('dialog', dialog => {
            dialog.dismiss();
        });
    }

    public async alertGetText() {
        await this.page.on('dialog', dialog => {
            dialog.message();

        });
    }

    public async alertGetTextAndAccept(text: string) {
        this.page.on('dialog', dialog => {
            const message = dialog.message();
            expect(message).toBe(text);
            dialog.accept()
        });
    }

    public async getInnerText(locator: string) {
        const element = await this.page.locator(locator);
        return await element.innerText();
    }

    public async selectByIndex(locator: string, index: number) {
        const element = await this.page.locator(locator);
        await element.nth(index).click();
    }

    public async type(element: string, text: string) {
        await this.page.locator(element).type(text);
    }

}