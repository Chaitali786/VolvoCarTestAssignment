describe('navigation container', () => {
    it('should show the navigation container', () => {
        const navtopbar = $('#sitenav:topbar')
        expect(navtopbar).toBeDisplayed();
        });

    it('should click on the Volvo Small Logo and verify the new URL', () => {
        const volvoimglogo = $('_SN-bk _SN-bl _SN-bm _SN-i');
        expect(volvoimglogo).toBeClickable()
        expect(browser).toHaveUrl('https://www.volvocars.com/intl');
    });
    

    it('should check the Our Cars  button to display car types', () => {
        const ourcars = $('#nav:topNavCarMenu');
        expect(ourcars).toBeClickable();
        const suvs = $('#nav:carCategoryTitle')
        expect(browser).toHaveText('SUVs')
    });

    it('should check the MENU button to display menu', () => {
        const dropdowntext = $("#listitem").selectByVisibleText("Buy")
        expect(browser).toHaveText('Buy')        
    });
    
    
});
