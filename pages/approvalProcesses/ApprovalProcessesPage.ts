import { AlmondBasePage } from "../AlmondBasePage";

export class ApprovalProcessesPage extends AlmondBasePage {
    private approvalNameFieldLocator = '[name="approval_process[name]"]';
    private descriptionFieldLocator = '[name="approval_process[description]"]';
    private addButtonTogglePickerLocator = '[class="btn blue dropdown-toggle"]';
    private reviewerAndApproverDropdownOptions = '[class="add_fields_viewer_approver btn bl ue-almond"]';
    private createButtonLocator = '[name="commit"]';
    private approverComboBoxPickerLocator = '[class="select2 select2-container select2-container--bootstrap select2-container--below select2-container--open"]';
    private approverComboBoxSearchBoxLocator = '[class="select2-search__field"]';

    public async fillApprovalProcessNameAndDescription(name: string, description: string) {
        await this.fillText(this.approvalNameFieldLocator, name);
        await this.fillText(this.descriptionFieldLocator, description);
    }

    public async addAndchooseReviewerAndApproverOptionFromDropdown(index: number, approverOption: string) {
        const addButtonIndex = this.page.locator(this.addButtonTogglePickerLocator);
        await addButtonIndex.nth(index).click();
        const approverOptions = addButtonIndex.locator(this.reviewerAndApproverDropdownOptions);
        if (await approverOptions.innerText() === approverOption) {
            await approverOptions.click();
        } else {
            throw new Error('no such option in dropdown');
        }
    }

    public async searchAndChooseAnApprover(approverName: string) {
        await this.clickElement(this.approverComboBoxPickerLocator);
        await this.fillText(this.approverComboBoxSearchBoxLocator, approverName);
        await this.page.keyboard.press('Enter');
    }

    public async clickCreate() {
        await this.clickElement(this.createButtonLocator);
    }
}