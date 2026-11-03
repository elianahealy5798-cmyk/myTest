import { browser,expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        for (const username of LoginPage.username) {
            await LoginPage.open()

            await LoginPage.login(username, LoginPage.password) 
            await browser.url('https://www.saucedemo.com/inventory.html')
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    }
    })
})

