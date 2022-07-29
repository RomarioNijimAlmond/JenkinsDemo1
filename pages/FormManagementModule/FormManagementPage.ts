import { AlmondBasePage } from "../AlmondBasePage";

export class FromManagementPage extends AlmondBasePage {
   

    private nameField = '[name="form_type[name]"]';
    private countableNameField = '[name="form_type[name]"]';
    private intendedForUseSelectLocator = '#form_type_intended_for_use';
    private saveAndProceedLocator = '#validate_form_before_save';
    private formValidationText = '[class="alert alert alert-success alert-dismissible"]';
    private addFieldLocator = '[class="add_fields main_link_to_add_fields btn grda-almond"]';
    private titleFieldLocator = '#form_type_fields_attributes_1658407865194_name';
    private elementTypeSelectLocator = '#form_type_fields_attributes_1658407865194_field_type';
    private addSubFieldLocator = '[class="add_fields add_sub_fields btn grda-almond"]';
    private optionTitleFieldLocator = '[name="form_type[fields_attributes][1658407865194][options_attributes][1658408614621][name]"]';
    private saveButtonLocator = '#validate_form_before_save';

    public async fillFormRequiredFields(name: string, countableName: string, description: string,) {
        await this.fillText(this.nameField, name);
        await this.fillText(this.countableNameField, countableName);
    }

    public async chooseIntendedForUseFromDropdown(useOfDoc: string) {
        const selectFromDropdown = await this.page.$(this.intendedForUseSelectLocator);
        selectFromDropdown?.selectOption({ value: useOfDoc });
    }

    public async saveAndProceedToTheFormGenerator(alertText: string) {
        await this.clickElement(this.saveAndProceedLocator);
        await this.alertGetTextAndAccept(alertText);
    }

    // public async validateFormSucessCaption(textCaption: string) {
    //     const validatationLocator = this.page.locator(this.formValidationText);
    //     expect(await validatationLocator.innerText()).toBe(textCaption);
    // }

    public async addFieldAndChooseTitleWithElementType(title: string, elementType: string) {
        await this.clickElement(this.addFieldLocator);
        await this.fillText(this.titleFieldLocator, title);
        const selectElementType = await this.page.locator(this.elementTypeSelectLocator);
        selectElementType?.selectOption({ value: elementType });
    }

    public async clickSaveAndAcceptAlert(alertText: string) {
        await this.clickElement(this.saveButtonLocator);
        await this.alertGetTextAndAccept(alertText);
    }

    public async
}