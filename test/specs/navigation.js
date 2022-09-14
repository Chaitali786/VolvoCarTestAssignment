describe('navigation container', () => {
    it('should show the navigation container', () => {
        const navtopbar = $('#sitenav:topbar')
        expect(navtopbar).toBeDisplayed();
        });

    it('should click on the Volvo Small Logo and verify the new URL', () => {
        const volvoimglogo = $('._SN-bk _SN-bl _SN-bm _SN-i');
        expect(volvoimglogo).toBeClickable()
        expect(browser).toHaveUrl('https://www.volvocars.com/intl');
    });
    

    it('should check the Our Cars  button to display car types', () => {
        const ourcars = $('#nav:topNavCarMenu');
        expect(ourcars).toBeClickable();
        
        //check Our Cars Menu gets displayed
        const ourCarSection = $('._SN-aj _SN-ak _SN-al _SN-am _SN-at _SN-ay _SN-kp _SN-kq _SN-kr _SN-ks _SN-kt _SN-ku _SN-kv _SN-s _SN-u _SN-w')
        ourCarSection.toBeDisplayed();

        //check car types segment 
        const carTypesMenuItems = $('._SN-aj _SN-ak _SN-am _SN-as _SN-ay _SN-lb _SN-lc _SN-ld _SN-le _SN-lf _SN-lg _SN-lh _SN-u _SN-w')
        carTypesMenuItems.toBeDisplayed();
    });

    it('should check the MENU button to display menu', () => {


        const sideNavigationMenu =  $('#sitenav-sidenav-toggle');
        expect(sideNavigationMenu).toBeClickable();
        sideNavigationMenu.click();

        const sideNavigationPanel = $('#nav:sideNavigation');
        sideNavigationPanel.toBeDisplayed();
       
    });

    
    
    
});
