import { expect } from "@playwright/test";
import { BasePage } from "../common/BasePage";
import { UpperToolBarEnums } from "./componentEnums/UpperToolBarEnums";
import { ModulesEnum } from "./navigationEnums/ModulesEnum";

export class AlmondBasePage extends BasePage {

    private searchBoxLocator = '//input[@type="search"]';
    private alertSuccessCaption = '[class="alert alert alert-success alert-dismissible"]';
    private usersDropdownListLocator = '[class="subject"]';
    private modulesGridRowLocator = '[role="row"]';


    public async navigateToModule(module: ModulesEnum) {
        await this.clickElement(module.valueOf());
    }

    public async clickOnUpperToolBar(upperToolBar: UpperToolBarEnums) {
        await this.clickElement(upperToolBar.valueOf());
    }

    public async fillSearchBox(search: string) {
        await this.fillText(this.searchBoxLocator, search);

    }

    public async validateAlertSuccessCaption(validationCaption: string) {
        const validationTextCaption = this.page.locator(this.alertSuccessCaption);
        expect(await validationTextCaption.innerText()).toBe(validationCaption);
    }

    public async clickAndChooseFromDropdownByText(element: string, text: string) {
        await this.clickElement(element);
        const userList = await this.page.$$(this.usersDropdownListLocator);
        for (let user of userList) {
            const userNameText = await user.innerText();
            if (userNameText.trim().includes(text)) {
                user.click();
                return;
            }
        }
    }

    // public async chooseFromDropdownByText(element:string, option:string) {
    //     const optionList = await this.page.$$(element);
    //     for(let options of optionList) {
    //         const optionText = await options.innerText();
    //         if(optionText.trim() === option) {
    //            options.click;
    //            return;
    //         }
    //     }
    // }

}