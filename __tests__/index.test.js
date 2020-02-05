describe('Google', () => {
    beforeAll(async () => {
        await page.goto('https://www.google.com/')
    })

    it('should display "google" text on page', async () => {
        const title = await page.title();
        expect(title).toBe('Google')
    })
})
