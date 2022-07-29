import { expect } from "@playwright/test";
import { BasePage } from "../../common/BasePage";

export class LoginPage extends BasePage {
    private emailFieldLocator = '//input[@placeholder="Email"]';
    private passwordFieldLocator = '[name="user[password]"]';
    private signInButtonLocator = '[class="btn green-almond submit"]';
    private loginValidationLocator = '//strong[text()="Signed in successfully."]';

    public async logIn(email: string, password: string) {
        await this.fillText(this.emailFieldLocator, email);
        await this.type(this.passwordFieldLocator, password);
        await this.clickElement(this.signInButtonLocator);
    }

    public async validateLoginIsSuccessful(text: string) {
        const validationMessage = this.page.locator(this.loginValidationLocator);
        expect(await validationMessage.innerText()).toBe(text);
    }
}