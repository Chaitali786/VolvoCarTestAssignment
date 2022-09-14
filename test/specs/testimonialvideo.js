describe('video', () => {
    it('should play video', () => {

      // open video
    const video1 = $('.videoTestimonials:video-0')
    expect(video1).toBeClickable()
    video1.click()

    // video is playing
    expect(video1).toHaveAttribute('controls')
    browser.pause(2000) // demo purposes
    
  })
  })