describe('Main Video', () => {
    it('should play main video', () => {
        const videoStatusButton = $('.a ac aw ct cu cv cw cx cy cz da dj dx dz gz lh pz qa qb')
        expect(videoStatusButton).toHaveAttribute('aria-label', 'pause')
    });

    it('should pause main video', () => {
        const videoStatusButton = $('.a ac aw ct cu cv cw cx cy cz da dj dx dz gz lh pz qa qb')
        expect(videoStatusButton).toHaveAttribute('aria-label', 'play')
    });


});