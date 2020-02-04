describe('Google', () => {
    beforeAll(async () => {
        await page.goto('https://whatismybrowser.com/')
    })

    it('should display "google" text on page', async () => {
        const browser = await page.$eval('.string-major a', el => el.text);
        expect(browser).toContain('Chrome')
    })
})
