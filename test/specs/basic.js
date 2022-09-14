describe('Volvo Car Home Page', () => {
    it('should open main URL and verify the right title', () => {
        browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
        expect(browser).toHaveTitle('A million more | Volvo Cars - International');

        // get rid of cookies
      browser.execute(`document.cookie = "OptanonAlertBoxClosed=${new Date().toISOString()};";`)
      browser.refresh()
       })

    
})
