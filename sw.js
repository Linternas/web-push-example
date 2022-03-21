self.addEventListener('push', function (e) {
  // self.registration.sendNotification('test message', {})

  var option = {
    body: 'This notification was generated from a push!',
    icon: 'images/example.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
    actions: [
      {
        actions: 'explore',
        title: 'Explore this new world',
        icon: 'iamges/checkmark.png'
      }, { actions: 'close', title: 'Close', icon: 'images/xmark.png' }
    ]
  }

  e.waituntil(self.registration.showNotification('Hello world', option))
})