describe('iconcalls out section', () => {
    it('should check text in the iconcallsout section1', () => {
        const sectiondivtext= $('.a ab ac ae ag aj al ao aq as au cu fv fz gc gf hb hc hd he hf hg hh hi');
        expect(sectiondivtext).toHaveText('Speed Cap');
    });
    
});