import {test} from "@playwright/test";
import { ApplicationUrl } from "../common/ApplicationUrl";
import { BasePage } from "../common/BasePage";
import { LoginPage } from "../pages/loginPage/LoginPage";
import { qase } from 'playwright-qase-reporter/dist/playwright';


test.describe('Login test to almond QMS', async() => {
    let basePage: BasePage;
    let loginPage: LoginPage;


    test.beforeEach(async({page}) => {
        basePage = new BasePage(page);
        loginPage = new LoginPage(page);
    })

    test.afterEach(async({context}) => {
        await context.clearCookies();
    })


    test(qase([13,14,15],'Create new Doc'), async({page}) => {
        await test.step('go to almond URL', async() => {
            await basePage.goToUrl(ApplicationUrl.ALMOND_QMS_TEST);
        })

        await test.step('log in with email and password', async() => {
            // await page.pause();
            await loginPage.logIn('romario@almond-qms.com', 'almond123');
        })

        await test.step('validate login is successful', async() => {
            await loginPage.validateLoginIsSuccessful('Signed in successfully.');
            await page.screenshot({ path: 'screenshot.png', fullPage: true });
        })
    })
})
