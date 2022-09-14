describe('video', () => {
    it('manipulate video', () => {
      browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more')
  
      // get rid of cookies
      browser.execute(`document.cookie = "OptanonAlertBoxClosed=${new Date().toISOString()};";`)
      browser.refresh()
  
      // open video
      const video1 = $('.Video-1')
      expect(video1).toBeClickable()
      video1.click()
  
      
  
      const player = $('#movie_player')
  
      // video is playing
      expect(player).toHaveElementClass('playing-mode')
  
      
    })
  })