import { expect } from "@playwright/test";
import { AlmondBasePage } from "../AlmondBasePage";

export class TasksPage extends AlmondBasePage {
    private tasksGridRowLocator = 'tbody tr';

    public async validateTaskSubjectAndClickOnActionTab(taskName: string) {
        const taskRow = this.page.locator(this.tasksGridRowLocator, { hasText: taskName });
        const taskSubject = taskRow.locator('td').nth(2);
        expect(await taskSubject.innerText()).toContain(taskName);
        const actionTab = taskRow.locator('td').nth(8);
        await actionTab.click();
    }
}