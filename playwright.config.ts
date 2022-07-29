import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {

    reporter: [
        ["./my-reporter.ts"],
        ["list"],
        ["junit", { outputFile: "reports/test-results.xml" }],
        ["allure-playwright"],
        ["json", { outputFile: "reports/test-results.json" }],
        ["html", { open: "never" }],

        ['playwright-qase-reporter',
            {
                apiToken: 'd0a05832ce620864a33d8a5d3f05266912158e7d',
                projectCode: 'ALMOND',
                runComplete: true,
                basePath: 'https://api.qase.io/v1',
                logging: true,
                uploadAttachments: true,
            
            }],

    ],

    use: {
        browserName: 'chromium',
        channel: 'chrome',
        trace: 'off',
        screenshot: 'on',
        ignoreHTTPSErrors: true,


        video: {
            mode: 'retain-on-failure'
        },
        contextOptions: {},
        //Browser options
        launchOptions: {
            channel: 'chrome',
            headless: false,
            slowMo: 500,
        }
    },



    // testMatch: ["PlaywrightProject/API.spec.ts"],
    // retries: 0,
    // reporter: [["dot"], ["json", {outputFile: "test-result.json"}]],
    // // ['experimental-allure-playwright']],

}

module.exports = config;
export default config;
