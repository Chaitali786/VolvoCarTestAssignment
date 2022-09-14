describe('data component Model Intro', () => {
    it('should check text in data component section : ModelIntro -1  ', () => {
        const sectiondivtext= $('#ModelIntro-1');
        expect(sectiondivtext).toHaveTextContaining('Ideas that change the world are often the most controversial.');
        
    });
});