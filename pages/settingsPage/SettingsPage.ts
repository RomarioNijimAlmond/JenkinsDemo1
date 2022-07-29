import { AlmondBasePage } from "../AlmondBasePage"

export class SettingsPage extends AlmondBasePage {

    private approvalProcessSelectLocator = '[name="form_approval_process"]';


    public async selectFormApprovalProcess(valueOPtion: string) {
        const option = await this.page.$(this.approvalProcessSelectLocator);
        await option?.selectOption(valueOPtion);
    }

}